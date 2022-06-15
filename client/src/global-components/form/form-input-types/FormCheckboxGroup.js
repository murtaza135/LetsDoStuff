import React from 'react';
import PropTypes from 'prop-types';
import FormElementGroup from './_FormElementGroup';
import FormCheckbox from './FormCheckbox';

const FormCheckboxGroup = ({ ...props }) => {
  const element = <FormCheckbox {...props} label={props.checkboxLabel} />;
  return <FormElementGroup {...props} element={element} />;
};

FormCheckboxGroup.defaultProps = {
  checkboxLabel: '',
  $stretch: false,
  label: ''
};

FormCheckboxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  checkboxLabel: PropTypes.string,
  $stretch: PropTypes.bool,
  label: PropTypes.string
};

export default FormCheckboxGroup;
