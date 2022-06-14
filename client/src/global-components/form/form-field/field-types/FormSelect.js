import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import * as S from './FormSelect.styles';

const FormSelect = ({ children, type, ...props }) => {
  const [fields] = useField({ ...props });

  return (
    <S.FormSelect {...fields} {...props}>
      {children}
    </S.FormSelect>
  );
};

FormSelect.defaultProps = {
  children: null,
  type: 'select',
};

FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  type: PropTypes.string,
};

export default FormSelect;
