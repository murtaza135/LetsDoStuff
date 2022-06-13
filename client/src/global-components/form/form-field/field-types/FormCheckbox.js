import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import FormInput from './FormInput.styles';
import FormTextArea from './FormTextArea.styles';
import * as S from './FormCheckbox.styles';

const FormCheckbox = ({ children, ...props }) => {
  const [fields, meta] = useField({ ...props, type: 'checkbox' });
  const isError = !!(meta.touched && meta.error);

  return (
    <S.FormCheckboxContainer $stretch={props.$stretch}>
      <S.FormCheckboxLabelContainer>
        <S.FormCheckboxInput type="checkbox" {...fields} {...props} />
        <S.FormCheckboxLabel>{children}</S.FormCheckboxLabel>
      </S.FormCheckboxLabelContainer>
    </S.FormCheckboxContainer>
  );
};

FormCheckbox.defaultProps = {};

FormCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  $stretch: PropTypes.bool.isRequired
};

export default FormCheckbox;
