import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import FormInput from './field-types/FormInput.styles';
import FormTextArea from './field-types/FormTextArea.styles';

const FormField = ({ ...props }) => {
  const [fields, meta] = useField(props);
  const isError = !!(meta.touched && meta.error);

  if (props.type === 'textarea') {
    return <FormTextArea {...fields} {...props} $error={isError} />;
  } if (props.type === 'checkbox') {
    return <FormInput type="checkbox" {...fields} {...props} $error={isError} />;
  }
  return <FormInput {...fields} {...props} $error={isError} />;
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
