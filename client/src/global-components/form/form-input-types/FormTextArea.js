import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import * as S from './FormTextArea.styles';
import 'react-datepicker/dist/react-datepicker.css';

const FormTextArea = ({ ...props }) => {
  const [fields, meta] = useField(props);
  const isError = !!(meta.touched && meta.error);

  return (
    <S.FormTextAreaStyled {...fields} {...props} $error={isError} />
  );
};

FormTextArea.propTypes = {
  name: PropTypes.string.isRequired
};

export default FormTextArea;
