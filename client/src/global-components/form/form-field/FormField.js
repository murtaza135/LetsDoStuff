import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import FormInput from './FormInput.styles';
import FormTextArea from './FormTextArea.styles';

const FormField = ({ ...props }) => {
  const [fields, meta] = useField(props);
  const isError = !!(meta.touched && meta.error);

  return (
    props.type === 'textarea'
      ? <FormTextArea {...fields} {...props} $error={isError} />
      : <FormInput {...fields} {...props} $error={isError} />
  );
};

FormField.defaultProps = {
  type: 'text',
  placeholder: null,
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string
};

export default FormField;
