import React from 'react';
import { Formik, Form, FormTitle, FormInputGroup, FormButton } from 'global-components/form';
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
      <FormInputGroup
        name="name"
        type="text"
        placeholder="Enter Name"
        label="Name"
      />
      <FormInputGroup
        name="email"
        type="email"
        placeholder="Enter Email"
        label="Email"
      />
      <FormInputGroup
        name="username"
        type="text"
        placeholder="Enter Username"
        label="Username"
      />
      <FormInputGroup
        name="password"
        type="password"
        placeholder="Enter Password"
        label="Password"
      />
      <FormInputGroup
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
