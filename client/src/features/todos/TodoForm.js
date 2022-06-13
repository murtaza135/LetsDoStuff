import React from 'react';
// eslint-disable-next-line max-len
import { Formik, Form, FormTitle, FormFieldGroup, FormButton, FormGroup, FormLabel, FormCheckbox, FormErrorMessage, FormInput, FormTextArea, FormDate } from 'global-components/form';
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

      <FormGroup>
        <FormLabel htmlFor="test">Test</FormLabel>
        <FormDate name="test" />
        {/* <input type="date" name="test" id="test" /> */}
        <FormErrorMessage name="test" />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="test2">Test</FormLabel>
        <FormInput name="test2" type="text" placeholder="Test" />
        <FormErrorMessage name="test2" />
      </FormGroup>

      {/* <FormFieldGroup
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
        $height="7rem"
      />
      <FormFieldGroup
        name="description"
        type="checkbox"
        placeholder="Description"
        label="Description"
      />
      <FormCheckbox name="checkbox2">Checkbox</FormCheckbox>
      <FormGroup>
        <FormLabel>Tags</FormLabel>
        <TagsInput />
      </FormGroup> */}
    </Form>
  </Formik>
);

export default TodoForm;
