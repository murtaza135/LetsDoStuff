import React from 'react';
import { useSelector } from 'react-redux';
import { useClearAlert } from './alert.hooks';
import { selectAlertMessage, selectAlertVariant } from './alert.selectors';
import * as S from './Alert.styles';

const Alert = () => {
  const message = useSelector(selectAlertMessage);
  const variant = useSelector(selectAlertVariant);
  const clearAlert = useClearAlert();

  return (
    message && (
      <S.AlertContainer $variant={variant}>
        <S.AlertText>{message}</S.AlertText>
        <S.AlertCloseIcon onClick={() => clearAlert()} />
      </S.AlertContainer>
    )
  );
};

export default Alert;
