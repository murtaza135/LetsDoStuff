import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Checkbox.styles';

const Checkbox = ({ $noBorder, children, ...props }) => (
  <S.CheckboxContainer $noBorder={$noBorder}>
    <S.CheckboxLabel>
      <S.FormCheckboxInput {...props} type="checkbox" />
      {children}
    </S.CheckboxLabel>
  </S.CheckboxContainer>
);

Checkbox.defaultProps = {
  children: '',
  $noBorder: false
};

Checkbox.propTypes = {
  children: PropTypes.string,
  $noBorder: PropTypes.bool
};

export default Checkbox;
