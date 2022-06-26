import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setError, clearError } from './error.slice';

export const useSetError = () => {
  const dispatch = useDispatch();
  return useCallback((error) => dispatch(setError(error)), [dispatch]);
};

export const useClearError = () => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(clearError()), [dispatch]);
};
