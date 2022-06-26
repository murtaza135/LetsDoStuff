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
import { capitalizeFirstLetter } from 'utils/string.utils';
import TagsInput from '../tags/TagsInput';
import * as S from './TodoForm.styles';
import validator from './TodoForm.validator';
import { useAddTodoMutation } from './todos.apislice';

const initialValues = {
  title: '',
  description: '',
  deadlineDate: null,
  important: false
};

// TODO add optimistic rendering
const AddTodoForm = () => {
  const form = useRef(null);
  const tagsInput = useRef(null);
  const [tags, setTags] = useState([]);
  const [focus, setFocus] = useState(false);
  const [addTodo] = useAddTodoMutation();

  const handleSubmit = async (values, { resetForm }) => {
    if (tagsInput.current !== document.activeElement) {
      try {
        const todoData = { ...values, tags };
        await addTodo(todoData).unwrap();
        resetForm();
        setTags([]);
      } catch (error) {
        // TODO add error component
        console.log(error);
      }
    }
  };

  const handleBlur = (event) => {
    if (!form.current.contains(event.relatedTarget)) {
      setFocus(false);
    }
  };

  const handleAddTag = (newTag) => {
    const doesTagAlreadyExist = (
      tags
        .map((tag) => tag.toLowerCase())
        .includes(newTag.toLowerCase())
    );

    if (!doesTagAlreadyExist && newTag !== '') {
      setTags((values) => [...values, capitalizeFirstLetter(newTag.toLowerCase())]);
    }
  };

  const handleDeleteTag = (oldTag) => {
    const tagsCopy = [...tags];
    const tagIndex = tagsCopy.findIndex((element) => element === oldTag);

    if (tagIndex !== -1) {
      tagsCopy.splice(tagIndex, 1);
      setTags(tagsCopy);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validator}
      onSubmit={handleSubmit}
    >
      <S.Form
        ref={form}
        tabIndex="0"
        onFocus={() => setFocus(true)}
        onBlur={handleBlur}
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
              tags={tags}
              onAddTag={handleAddTag}
              onDeleteTag={handleDeleteTag}
            />
          </FormGroup>

          <FormButton type="submit" $mt="1.75rem">Add Todo</FormButton>

          <Text $color="medium" $mt="1rem">* required</Text>
        </S.AnimateHeightContainer>
      </S.Form>
    </Formik>
  );
};

export default AddTodoForm;
