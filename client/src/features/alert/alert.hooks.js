import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setAlert, clearAlert } from './alert.slice';

export const useSetAlert = () => {
  const dispatch = useDispatch();
  return useCallback((alertData) => dispatch(setAlert(alertData)), [dispatch]);
};

export const useClearAlert = () => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(clearAlert()), [dispatch]);
};
