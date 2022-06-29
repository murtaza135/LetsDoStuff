import React, { useState, useRef } from 'react';
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
import { useSetAlert } from 'features/alert/alert.hooks';
import TagsInput from '../tags/TagsInput';
import * as S from './TodoForm.styles';
import validator from './TodoForm.validator';
import { useAddTodoMutation } from './todos.apislice';

const initialValues = {
  title: '',
  description: '',
  deadlineDate: null,
  important: false,
  tags: []
};

const AddTodoForm = () => {
  const form = useRef(null);
  const tagsInput = useRef(null);
  const [focus, setFocus] = useState(false);
  const [addTodo] = useAddTodoMutation();
  const setAlert = useSetAlert();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await addTodo(values).unwrap();
      resetForm();
      setFocus(false);
    } catch (error) {
      const message = error.data.message || 'Internal Server Error';
      setAlert({ message, variant: 'danger' });
      window.scrollTo(0, 0);
    }
  };

  const handleBlur = (event, formikProps) => {
    if (!form.current.contains(event.relatedTarget)) {
      setFocus(false);
      formikProps.setTouched({});
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validator}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <S.Form
          ref={form}
          tabIndex="0"
          onFocus={() => setFocus(true)}
          onBlur={(event) => handleBlur(event, formikProps)}
          nonSubmittableNodes={[tagsInput]}
        >
          {focus && <S.CloseButton onClick={() => form.current.blur()} />}

          <Title $size="m" $color="secondary">Add a Todo</Title>
          <FormInputGroup name="title" label="Title *" placeholder="Title" type="text" />

          <S.AnimateHeightContainer duration={500} height={focus ? 'auto' : 0}>
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
                onCalendarClose={() => form.current.focus({ preventScroll: true })}
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
              <TagsInput
                ref={tagsInput}
                name="tags"
                placeholder="Enter Tag"
              />
            </FormGroup>

            <FormButton type="submit" $mt="1.75rem">Add Todo</FormButton>

            <Text $color="medium" $mt="1rem">* required</Text>
          </S.AnimateHeightContainer>
        </S.Form>
      )}
    </Formik>
  );
};

export default AddTodoForm;
