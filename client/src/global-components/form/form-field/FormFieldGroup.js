import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../FormGroup.styles';
import FormLabel from '../FormLabel.styles';
import FormField from './FormField';
import FormErrorMessage from '../FormErrorMessage';

const FormFieldGroup = ({ name, type, placeholder, label, ...props }) => (
  <FormGroup>
    <FormLabel htmlFor={name}>{label}</FormLabel>
    <FormField name={name} type={type} placeholder={placeholder} {...props} />
    <FormErrorMessage name={name} />
  </FormGroup>
);

FormFieldGroup.defaultProps = {
  type: 'text',
  label: null,
  placeholder: null,
};

FormFieldGroup.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default FormFieldGroup;
