import React from 'react';
import { Formik, Form, FormTitle, FormLabelledField, FormButton } from 'global-components/form';

const initialValues = {
  email: '',
  password: ''
};

const LoginForm = () => (
  <Formik initialValues={initialValues}>
    <Form>
      <FormTitle>Login</FormTitle>
      <FormLabelledField name="email" type="email" placeholder="Enter Email" label="Email" />
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
