import React from 'react';
// eslint-disable-next-line max-len
import { Formik, Form, FormTitle, FormButton, FormGroup, FormLabel, FormCheckbox, FormErrorMessage, FormInput, FormTextArea, FormDate, FormSelect, FormCheckboxGroup, FormDateGroup, FormInputGroup, FormSelectGroup, FormTextAreaGroup } from 'global-components/form';
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
      <FormInputGroup name="test4" label="test4" type="text" placeholder="some text here..." />
    </Form>
  </Formik>
);

export default TodoForm;
