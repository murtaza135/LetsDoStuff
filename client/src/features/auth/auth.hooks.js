import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from './auth.slice';

export const useLogout = () => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(logout()), [dispatch]);
};
