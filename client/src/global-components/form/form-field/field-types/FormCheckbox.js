import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import * as S from './FormCheckbox.styles';

const FormCheckbox = ({ type, ...props }) => {
  const [fields] = useField({ ...props, type: 'checkbox' });

  return (
    <S.FormCheckboxContainer $stretch={props.$stretch}>
      <S.FormCheckboxLabel>
        <S.FormCheckboxInput type="checkbox" {...fields} {...props} />
        {props.label}
      </S.FormCheckboxLabel>
    </S.FormCheckboxContainer>
  );
};

FormCheckbox.defaultProps = {
  label: '',
  type: 'checkbox',
  $stretch: false
};

FormCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  $stretch: PropTypes.bool
};

export default FormCheckbox;
