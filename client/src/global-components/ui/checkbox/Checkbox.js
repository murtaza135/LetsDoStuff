import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Checkbox.styles';

const Checkbox = ({ children, ...props }) => (
  <S.CheckboxContainer $stretch={props.$stretch} $noBorder={props.$noBorder}>
    <S.CheckboxLabel>
      <S.FormCheckboxInput {...props} type="checkbox" />
      {children}
    </S.CheckboxLabel>
  </S.CheckboxContainer>
);

Checkbox.defaultProps = {
  children: '',
  $stretch: false,
  $noBorder: false
};

Checkbox.propTypes = {
  children: PropTypes.string,
  $stretch: PropTypes.bool,
  $noBorder: PropTypes.bool
};

export default Checkbox;
