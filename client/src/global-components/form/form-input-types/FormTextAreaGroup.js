import React from 'react';
import FormElementGroup from './_FormElementGroup';
import FormTextArea from './FormTextArea';

const FormTextAreaGroup = (props) => {
  const element = <FormTextArea {...props} />;
  return <FormElementGroup {...props} element={element} />;
};

export default FormTextAreaGroup;
