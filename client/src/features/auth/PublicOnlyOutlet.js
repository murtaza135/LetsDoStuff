import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from './auth.selectors';

const PublicOnlyOutlet = () => {
  const location = useLocation();
  const token = useSelector(selectCurrentToken);

  return (
    !token
      ? <Outlet />
      : <Navigate to="/" state={{ from: location }} replace />
  );
};

export default PublicOnlyOutlet;
