import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { FormErrorMessageContainer } from './FormErrorMessage.styles';

const FormErrorMessage = ({ name, transformError, touchAllowed }) => {
  const [fields, meta] = useField({ name });
  const isError = !touchAllowed ? meta.touched && meta.error : !!meta.error;
  const error = meta.error ? transformError(meta.error) : meta.error;

  return (
    <FormErrorMessageContainer>
      {isError && error}
    </FormErrorMessageContainer>
  );
};

FormErrorMessage.defaultProps = {
  transformError: (error) => (error),
  touchAllowed: false
};

FormErrorMessage.propTypes = {
  name: PropTypes.string.isRequired,
  transformError: PropTypes.func,
  touchAllowed: PropTypes.bool
};

export default FormErrorMessage;
