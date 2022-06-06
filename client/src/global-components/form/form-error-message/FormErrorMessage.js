import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, useFormikContext } from 'formik';
import FormErrorMessageWrapper from './FormErrorMessageWrapper.styles';

const FormErrorMessage = ({ name }) => {
  const formikContext = useFormikContext();

  return (
    <FormErrorMessageWrapper>
      <ErrorMessage formik={formikContext} name={name} />
    </FormErrorMessageWrapper>
  );
};

FormErrorMessage.propTypes = {
  name: PropTypes.string.isRequired
};

export default FormErrorMessage;
