import React from 'react';
import FormElementGroup from './_FormElementGroup';
import FormInput from './FormInput';

const FormInputGroup = ({ ...props }) => {
  const element = <FormInput {...props} />;
  return <FormElementGroup {...props} element={element} />;
};

export default FormInputGroup;
