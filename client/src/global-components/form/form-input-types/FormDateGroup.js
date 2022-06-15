import React from 'react';
import FormElementGroup from './_FormElementGroup';
import FormDate from './FormDate';

const FormDateGroup = (props) => {
  const element = <FormDate {...props} />;
  return <FormElementGroup {...props} element={element} />;
};

export default FormDateGroup;
