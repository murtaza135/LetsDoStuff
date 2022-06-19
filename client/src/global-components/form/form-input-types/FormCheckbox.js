import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import * as S from './FormCheckbox.styles';

const FormCheckbox = ({ children, ...props }) => {
  const [fields, meta] = useField({ ...props, type: 'checkbox' });
  const isError = !!(meta.touched && meta.error);

  return (
    <S.FormCheckboxContainer $stretch={props.$stretch} $error={isError}>
      <S.FormCheckboxLabel>
        <S.FormCheckboxInput {...fields} {...props} type="checkbox" />
        {children}
      </S.FormCheckboxLabel>
    </S.FormCheckboxContainer>
  );
};

FormCheckbox.defaultProps = {
  children: '',
  $stretch: false
};

FormCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string,
  $stretch: PropTypes.bool
};

export default FormCheckbox;
