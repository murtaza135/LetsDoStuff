import React, { useContext, useEffect, useRef } from 'react';
import {
  Formik,
  FormButton,
  FormCheckboxGroup,
  FormDateGroup,
  FormInputGroup,
  FormTextAreaGroup,
  FormGroup,
  FormLabel
} from 'global-components/form';
import { Title, Text } from 'global-components/ui';
import TagsInput from '../tags/TagsInput';
import * as S from './TodoForm.styles';
import validator from './TodoForm.validator';
import TodoFormContext from './TodoFormContext';
import { useUpdateTodoMutation } from './todos.apislice';

// TODO add optimistic rendering
const EditTodoForm = () => {
  const currentTodoItemRef = useRef(null);
  const { todoDetails, todoItemRef, finishEditTodo } = useContext(TodoFormContext);
  const [updateTodo] = useUpdateTodoMutation();

  const initialValues = {
    ...todoDetails,
    deadlineDate: todoDetails.deadlineDate
      ? new Date(todoDetails.deadlineDate)
      : null
  };

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
      // TODO add error component
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validator}
      onSubmit={handleSubmit}
    >
      <S.Form>
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
            minDate={new Date()}
            placeholderText="Date"
            isClearable
          />

          <FormCheckboxGroup name="important" label="Important?" $stretch>
            Important?
          </FormCheckboxGroup>
        </S.TodoFormDataContainer>

        <FormGroup>
          <FormLabel>Tags</FormLabel>
          <TagsInput />
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
