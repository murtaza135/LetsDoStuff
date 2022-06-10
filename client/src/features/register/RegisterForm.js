import React from 'react';
import { Formik, Form, FormTitle, FormLabelledField, FormButton } from 'global-components/form';
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
      <FormLabelledField
        name="name"
        type="text"
        placeholder="Enter Name"
        label="Name"
      />
      <FormLabelledField
        name="email"
        type="email"
        placeholder="Enter Email"
        label="Email"
      />
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
      <FormLabelledField
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
