import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Spinner.styles';

const Spinner = ({ text }) => (
  <S.SpinnerContainer>
    <S.Spinner alt={text ? '' : 'Loading...'} />
    {text && <S.SpinnerText>{text}</S.SpinnerText>}
  </S.SpinnerContainer>
);

Spinner.defaultProps = {
  text: null
};

Spinner.propTypes = {
  text: PropTypes.string
};

export default Spinner;
