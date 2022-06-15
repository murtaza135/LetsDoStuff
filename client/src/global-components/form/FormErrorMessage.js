import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, useFormikContext } from 'formik';
import { FormErrorMessageContainer } from './FormErrorMessage.styles';

const FormErrorMessage = ({ name }) => {
  const formikContext = useFormikContext();

  return (
    <FormErrorMessageContainer>
      <ErrorMessage formik={formikContext} name={name} />
    </FormErrorMessageContainer>
  );
};

FormErrorMessage.propTypes = {
  name: PropTypes.string.isRequired
};

export default FormErrorMessage;
