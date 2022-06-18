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
import { Spacer } from 'global-components/layout';
import TagsInput from '../tags/TagsInput';
import * as S from './TodoForm.styles';

const initialValues = {
  title: '',
  description: ''
};

const TodoForm = () => {
  const form = useRef(null);
  const [focus, setFocus] = useState(false);

  const handleBlur = (event) => {
    if (!form.current.contains(event.relatedTarget)) {
      setFocus(false);
    }
  };

  return (
    <Formik initialValues={initialValues}>
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

          <S.FlexContainer>
            <FormDateGroup
              name="deadlineDate"
              label="Deadline"
              onCalendarClose={() => form.current.focus({ preventScroll: true })}
            />
            <FormCheckboxGroup
              name="important"
              label="Important?"
              checkboxLabel="Important?"
              $stretch
            />
          </S.FlexContainer>

          <FormGroup>
            <FormLabel>Tags</FormLabel>
            <TagsInput />
          </FormGroup>

          <FormButton type="submit" margin="1.75rem">Add Todo</FormButton>

          <Spacer mb="0.5rem" />
          <Text $color="medium">* required</Text>
        </S.AnimateHeightContainer>
      </S.Form>
    </Formik>
  );
};

export default TodoForm;
