import React, { useEffect, useRef } from 'react';
import {
  Formik,
  FormButton,
  FormCheckboxGroup,
  FormDateGroup,
  FormInputGroup,
  FormTextAreaGroup,
  FormGroup,
  FormLabel,
  FormErrorMessage
} from 'global-components/form';
import { Title, Text } from 'global-components/ui';
import { useSetAlert } from 'features/alert/alert.hooks';
import { re } from 'constants';
import TagsInput from '../tags/TagsInput';
import * as S from './TodoForm.styles';
import validator from './TodoForm.validator';
import { useUpdateTodoMutation } from './todos.apislice';
import { useTodoFormContext } from './todos.hooks';

// TODO add optimistic rendering
const EditTodoForm = () => {
  const currentTodoItemRef = useRef(null);
  const tagsInput = useRef(null);
  const { todoDetails, todoItemRef, finishEditTodo } = useTodoFormContext();
  const [updateTodo] = useUpdateTodoMutation();
  const setAlert = useSetAlert();

  useEffect(() => {
    window.scrollTo(0, 0);
    currentTodoItemRef.current = todoItemRef?.current;

    return () => {
      currentTodoItemRef.current?.focus();
    };
  }, [todoItemRef, todoDetails]);

  const handleSubmit = async (values) => {
    try {
      await updateTodo(values).unwrap();
      finishEditTodo();
    } catch (error) {
      const message = error.data.message || 'Internal Server Error';
      setAlert({ message, variant: 'danger' });
      window.scrollTo(0, 0);
    }
  };

  return (
    <Formik
      initialValues={todoDetails}
      enableReinitialize
      validationSchema={validator}
      onSubmit={handleSubmit}
    >
      <S.Form nonSubmittableNodes={[tagsInput]}>
        <S.CloseButton onClick={() => finishEditTodo()} />
        <Title $size="m" $color="secondary">Edit Todo</Title>
        <FormInputGroup name="title" label="Title *" placeholder="Title" type="text" />

        <FormTextAreaGroup
          name="description"
          label="Description"
          placeholder="Description"
          $height="8rem"
        />

        <S.TodoFormDataContainer>
          <FormDateGroup
            name="deadlineDate"
            label="Deadline Date"
            // minDate={new Date()}
            placeholderText="Date"
            isClearable
          />

          <FormCheckboxGroup name="important" label="Important?" $stretch>
            Important?
          </FormCheckboxGroup>
        </S.TodoFormDataContainer>

        <FormGroup>
          <FormLabel>Tags</FormLabel>
          <TagsInput
            ref={tagsInput}
            name="tags"
            placeholder="Enter Tag"
            validationRegex={re.tagsValidation}
          />
          <FormErrorMessage
            name="tags"
            transformError={(error) => error?.find((errorItem) => errorItem)}
            touchAllowed
          />
        </FormGroup>

        <S.TodoFormButtonsContainer>
          <FormButton type="submit" $mt="1.75rem">Update Todo</FormButton>
          <FormButton
            type="button"
            $mt="1.75rem"
            onClick={() => finishEditTodo()}
          >
            Cancel
          </FormButton>
        </S.TodoFormButtonsContainer>

        <Text $color="medium" $mt="1rem">* required</Text>
      </S.Form>
    </Formik>
  );
};

export default EditTodoForm;
