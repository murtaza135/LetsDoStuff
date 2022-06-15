import React from 'react';
import {
  Formik,
  Form,
  FormButton,
  FormCheckboxGroup,
  FormDateGroup,
  FormInputGroup
} from 'global-components/form';
import { Title } from 'global-components/ui';
import TagsInput from '../tags/TagsInput';

const initialValues = {
  title: '',
  description: ''
};

const TodoForm = () => (
  <Formik initialValues={initialValues}>
    <Form>
      <Title $size="m" $color="secondary">Add a Todo</Title>
      <FormCheckboxGroup name="test1" label="test1" checkboxLabel="testing?" />
      <FormDateGroup name="test2" label="test2" />
      <FormInputGroup name="test3" label="test3" type="text" placeholder="some text here..." />
      <TagsInput />
      <FormButton type="submit">Submit</FormButton>
    </Form>
  </Formik>
);

export default TodoForm;
