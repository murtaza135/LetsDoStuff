import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useClearAlert } from './alert.hooks';
import { selectAlertMessage, selectAlertVariant } from './alert.selectors';
import * as S from './Alert.styles';

const Alert = ({ timer }) => {
  const message = useSelector(selectAlertMessage);
  const variant = useSelector(selectAlertVariant);
  const clearAlert = useClearAlert();

  useEffect(() => {
    const clearAlertAfterDelay = timer && setTimeout(() => clearAlert(), timer);
    return () => timer && clearTimeout(clearAlertAfterDelay);
  }, [clearAlert, timer, message]);

  return (
    message && (
      <S.AlertContainer $variant={variant}>
        <S.AlertText>{message}</S.AlertText>
        <S.AlertCloseIcon onClick={() => clearAlert()} />
      </S.AlertContainer>
    )
  );
};

Alert.defaultProps = {
  timer: 30000
};

Alert.propTypes = {
  timer: PropTypes.number
};

export default Alert;
