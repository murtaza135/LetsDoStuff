import React from 'react';
// eslint-disable-next-line max-len
import { Formik, Form, FormTitle, FormLabelledField, FormButton, FormGroup, FormLabel } from 'global-components/form';
import { Title } from 'global-components/ui';
import * as S from './TodoForm.styles';
import TagsInput from './TagsInput';

const intialValues = {
  title: '',
  description: ''
};

const TodoForm = () => (
  <Formik intialValues={intialValues}>
    <Form>
      <Title $size="m" $color="secondary">Add a Todo</Title>
      <FormLabelledField
        name="title"
        type="text"
        placeholder="Title"
        label="Title"
      />
      <FormLabelledField
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
