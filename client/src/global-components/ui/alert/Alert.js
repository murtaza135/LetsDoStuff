import React from 'react';
import { useSelector } from 'react-redux';
import { selectAlertMessage, selectAlertVariant } from 'features/alert/alert.selectors';
import { useClearAlert } from 'features/alert/alert.hooks';
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
