import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setAlert, clearAlert } from './alert.slice';

export const useSetAlert = () => {
  const dispatch = useDispatch();
  return useCallback(({ message, variant }) => (
    dispatch(setAlert({ message, variant }))
  ), [dispatch]);
};

export const useClearAlert = () => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(clearAlert()), [dispatch]);
};
