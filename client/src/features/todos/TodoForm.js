import React from 'react';
import {
  Formik,
  Form,
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

const TodoForm = () => (
  <Formik initialValues={initialValues}>
    <Form>
      <Title $size="m" $color="secondary">Add a Todo</Title>
      <FormInputGroup name="title" label="Title *" placeholder="Title" type="text" />
      <FormTextAreaGroup
        name="description"
        label="Description"
        placeholder="Description"
        $height="8rem"
      />
      <S.FlexContainer>
        <FormDateGroup name="deadlineDate" label="Deadline" />
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

      <FormButton type="submit">Add Todo</FormButton>

      <Spacer mb="0.5rem" />
      <Text $color="medium">* required</Text>
    </Form>
  </Formik>
);

export default TodoForm;
