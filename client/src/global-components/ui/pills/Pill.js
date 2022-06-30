import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Pill.styles';

const Pill = ({ value, variant, active, onClick, children, ...rest }) => (
  <S.Pill
    {...rest}
    $variant={variant}
    $active={active}
    onClick={(event) => onClick(event, value ?? children)}
  >
    {children}
  </S.Pill>
);

Pill.defaultProps = {
  value: null,
  variant: 'secondary',
  active: false,
  onClick: () => { }
};

Pill.propTypes = {
  value: PropTypes.string,
  variant: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired
};

export default Pill;
