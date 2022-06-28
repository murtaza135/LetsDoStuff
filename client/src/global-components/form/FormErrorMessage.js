import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, useFormikContext } from 'formik';
import { FormErrorMessageContainer } from './FormErrorMessage.styles';

const FormErrorMessage = ({ name }) => {
  const formik = useFormikContext();

  return (
    <FormErrorMessageContainer>
      <ErrorMessage formik={formik} name={name} />
    </FormErrorMessageContainer>
  );
};

FormErrorMessage.propTypes = {
  name: PropTypes.string.isRequired
};

export default FormErrorMessage;
