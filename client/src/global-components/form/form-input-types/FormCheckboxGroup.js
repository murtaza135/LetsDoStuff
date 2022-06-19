import React from 'react';
import PropTypes from 'prop-types';
import FormElementGroup from './_FormElementGroup';
import FormCheckbox from './FormCheckbox';

const FormCheckboxGroup = ({ ...props }) => {
  const element = <FormCheckbox {...props} />;
  return <FormElementGroup {...props} element={element} />;
};

FormCheckboxGroup.defaultProps = {
  label: '',
  $stretch: false
};

FormCheckboxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  $stretch: PropTypes.bool
};

export default FormCheckboxGroup;
