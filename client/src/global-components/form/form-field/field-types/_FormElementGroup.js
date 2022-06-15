import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../../FormGroup.styles';
import FormLabel from '../../FormLabel.styles';
import FormErrorMessage from '../../form-error-message/FormErrorMessage';

const FormElementGroup = ({ element, name, label }) => (
  <FormGroup>
    {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
    {element}
    <FormErrorMessage name={name} />
  </FormGroup>
);

FormElementGroup.defaultProps = {
  label: null
};

FormElementGroup.propTypes = {
  element: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default FormElementGroup;
