import React, { Fragment } from 'react';
import { Formik, Form, FormTitle, FormInputGroup, FormButton } from 'global-components/form';
import { useRegisterMutation } from 'features/auth/auth.apislice';
import { useNavigate } from 'react-router-dom';
import { useSetAlert } from 'features/alert/alert.hooks';
import { Spinner } from 'global-components/ui';
import validator from './RegisterForm.validator';

const initialValues = {
  name: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: ''
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();
  const setAlert = useSetAlert();

  const handleRegister = async (values) => {
    try {
      await register(values).unwrap();
      navigate('/');
    } catch (error) {
      const message = error.data.message || 'Internal Server Error';
      setAlert({ message, variant: 'danger' });
      window.scrollTo(0, 0);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validator}
      onSubmit={handleRegister}
    >
      <Fragment>
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
        {isLoading && <Spinner size="50px" />}
      </Fragment>
    </Formik>
  );
};

export default RegisterForm;
