import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import * as S from './FormSelect.styles';

const FormSelect = ({ children, ...props }) => {
  const [fields, meta] = useField({ ...props });
  const isError = !!(meta.touched && meta.error);

  return (
    <S.FormSelect {...fields} {...props} $error={isError}>
      {children}
    </S.FormSelect>
  );
};

FormSelect.defaultProps = {
  children: null,
};

FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default FormSelect;
