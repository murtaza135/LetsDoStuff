import React from 'react';
import { Formik, Form, FormTitle, FormLabelledField, FormButton } from 'global-components/form';

const initialValues = {
  username: '',
  password: ''
};

const LoginForm = () => (
  <Formik initialValues={initialValues}>
    <Form>
      <FormTitle>Login</FormTitle>
      <FormLabelledField
        name="username"
        type="text"
        placeholder="Enter Username"
        label="Username"
      />
      <FormLabelledField
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
