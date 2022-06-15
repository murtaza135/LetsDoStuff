import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import * as S from './FormCheckbox.styles';

const FormCheckbox = ({ ...props }) => {
  const [fields, meta] = useField({ ...props, type: 'checkbox' });
  const isError = !!(meta.touched && meta.error);

  return (
    <S.FormCheckboxContainer $stretch={props.$stretch} $error={isError}>
      <S.FormCheckboxLabel>
        <S.FormCheckboxInput {...fields} {...props} type="checkbox" />
        {props.label}
      </S.FormCheckboxLabel>
    </S.FormCheckboxContainer>
  );
};

FormCheckbox.defaultProps = {
  label: '',
  $stretch: false
};

FormCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  $stretch: PropTypes.bool
};

export default FormCheckbox;