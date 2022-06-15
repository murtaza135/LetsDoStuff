import React from 'react';
// eslint-disable-next-line max-len
import { Formik, Form, FormTitle, FormFieldGroup, FormButton, FormGroup, FormLabel, FormCheckbox, FormErrorMessage, FormInput, FormTextArea, FormDate, FormSelect } from 'global-components/form';
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
        <FormLabel htmlFor="test1">Test</FormLabel>
        <FormCheckbox name="test1" label="Important?" />
        <FormErrorMessage name="test1" />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="test2">Test</FormLabel>
        <FormDate name="test2" />
        <FormErrorMessage name="test2" />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="test3">Test</FormLabel>
        <FormSelect name="test3">
          <option value="hello">  Hello</option>
          <option value="bye">Bye</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </FormSelect>
        <FormErrorMessage name="test3" />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="test4">Test</FormLabel>
        <FormInput name="test4" type="text" placeholder="Test" />
        <FormErrorMessage name="test4" />
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
