import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../auth/auth.selectors';

const PrivateOutlet = () => {
  const location = useLocation();
  const token = useSelector(selectCurrentToken);

  return (
    token
      ? <Outlet />
      : <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateOutlet;
