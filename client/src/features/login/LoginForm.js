import React from 'react';
import { Formik, Form, FormTitle, FormInputGroup, FormButton } from 'global-components/form';
import { useLoginMutation } from 'features/auth/auth.apislice';
import { useNavigate } from 'react-router-dom';
import { useSetAlert } from 'features/alert/alert.hooks';
import validator from './LoginForm.validator';

const initialValues = {
  username: '',
  password: ''
};

const LoginForm = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const setAlert = useSetAlert();

  const handleLogin = async (values) => {
    try {
      await login(values).unwrap();
      navigate('/');
    } catch (error) {
      const { message } = error.data;
      setAlert({ message, variant: 'danger' });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validator}
      onSubmit={handleLogin}
    >
      <Form>
        <FormTitle>Login</FormTitle>
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
        <FormButton type="submit">Login</FormButton>
      </Form>
    </Formik>
  );
};

export default LoginForm;
