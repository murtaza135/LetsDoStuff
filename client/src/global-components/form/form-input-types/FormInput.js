import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import * as S from './FormInput.styles';
import 'react-datepicker/dist/react-datepicker.css';

const FormInput = ({ ...props }) => {
  const [fields, meta] = useField(props);
  const isError = !!(meta.touched && meta.error);

  return (
    <S.FormInputStyled {...fields} {...props} $error={isError} />
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired
};

export default FormInput;
