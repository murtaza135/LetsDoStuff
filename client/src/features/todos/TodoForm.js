import React from 'react';
// eslint-disable-next-line max-len
import { Formik, Form, FormTitle, FormFieldGroup, FormButton, FormGroup, FormLabel } from 'global-components/form';
import { Title } from 'global-components/ui';
import TagsInput from '../tags/TagsInput';

const intialValues = {
  title: '',
  description: ''
};

const TodoForm = () => (
  <Formik intialValues={intialValues}>
    <Form>
      <Title $size="m" $color="secondary">Add a Todo</Title>
      <FormFieldGroup
        name="title"
        type="text"
        placeholder="Title"
        label="Title"
      />
      <FormFieldGroup
        name="description"
        type="textarea"
        placeholder="Description"
        label="Description"
      />
      <FormGroup>
        <FormLabel>Tags</FormLabel>
        <TagsInput />
      </FormGroup>
    </Form>
  </Formik>
);

export default TodoForm;
