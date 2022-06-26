import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Alert.styles';

const Alert = ({ variant, children }) => {
  const temp = 0;

  return (
    <S.AlertContainer $variant={variant}>
      <S.AlertText>{children}</S.AlertText>
      <S.AlertCloseIcon />
    </S.AlertContainer>
  );
};

Alert.defaultProps = {
  variant: 'secondary'
};

Alert.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Alert;
