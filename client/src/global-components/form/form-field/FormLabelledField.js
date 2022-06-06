import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../FormGroup.styles';
import FormLabel from '../FormLabel.styles';
import FormField from './FormField';
import FormErrorMessage from '../form-error-message/FormErrorMessage';

const FormLaballedField = ({ name, type, placeholder, label }) => (
  <FormGroup>
    <FormLabel htmlFor={name}>{label}</FormLabel>
    <FormField name={name} type={type} placeholder={placeholder} />
    <FormErrorMessage name={name} />
  </FormGroup>
);

FormLaballedField.defaultProps = {
  type: 'text',
  label: null,
  placeholder: null,
};

FormLaballedField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default FormLaballedField;
