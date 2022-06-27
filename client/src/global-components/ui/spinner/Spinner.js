import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Spinner.styles';

const Spinner = ({ text, size }) => (
  <S.SpinnerContainer>
    <S.Spinner alt={text ? '' : 'Loading...'} $size={size} />
    {text && <S.SpinnerText>{text}</S.SpinnerText>}
  </S.SpinnerContainer>
);

Spinner.defaultProps = {
  text: null,
  size: null
};

Spinner.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string
};

export default Spinner;
