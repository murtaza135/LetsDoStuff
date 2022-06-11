import React from 'react';
import { Formik, Form, FormTitle, FormFieldGroup, FormButton } from 'global-components/form';
import validator from './LoginForm.validator';

const initialValues = {
  username: '',
  password: ''
};

const LoginForm = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validator}
  >
    <Form>
      <FormTitle>Login</FormTitle>
      <FormFieldGroup
        name="username"
        type="text"
        placeholder="Enter Username"
        label="Username"
      />
      <FormFieldGroup
        name="password"
        type="password"
        placeholder="Enter Password"
        label="Password"
      />
      <FormButton type="submit">Login</FormButton>
    </Form>
  </Formik>
);

export default LoginForm;
