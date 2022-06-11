import React from 'react';
import { Formik, Form, FormTitle, FormFieldGroup, FormButton } from 'global-components/form';
import validator from './RegisterForm.validator';

const initialValues = {
  name: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: ''
};

const RegisterForm = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validator}
  >
    <Form>
      <FormTitle>Register</FormTitle>
      <FormFieldGroup
        name="name"
        type="text"
        placeholder="Enter Name"
        label="Name"
      />
      <FormFieldGroup
        name="email"
        type="email"
        placeholder="Enter Email"
        label="Email"
      />
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
      <FormFieldGroup
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        label="Confirm Password"
      />
      <FormButton type="submit">Register</FormButton>
    </Form>
  </Formik>
);

export default RegisterForm;
