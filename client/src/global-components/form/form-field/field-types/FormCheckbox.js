import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import * as S from './FormCheckbox.styles';

const FormCheckbox = ({ children, type, ...props }) => {
  const [fields] = useField({ ...props, type: 'checkbox' });

  return (
    <S.FormCheckboxContainer $stretch={props.$stretch}>
      <S.FormCheckboxLabel>
        <S.FormCheckboxInput type="checkbox" {...fields} {...props} />
        {children}
      </S.FormCheckboxLabel>
    </S.FormCheckboxContainer>
  );
};

FormCheckbox.defaultProps = {
  type: 'checkbox',
  $stretch: false
};

FormCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  $stretch: PropTypes.bool
};

export default FormCheckbox;
