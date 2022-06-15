import React from 'react';
import FormElementGroup from './_FormElementGroup';
import FormSelect from './FormSelect';

const FormSelectGroup = ({ ...props }) => {
  const element = <FormSelect {...props} />;
  return <FormElementGroup {...props} element={element} />;
};

export default FormSelectGroup;
