import React from 'react';
import { Outlet } from 'react-router-dom';
import { useClearError } from 'features/error/error.hooks';

const PageInitialiserOutlet = () => {
  const clearError = useClearError();
  clearError();

  return (
    <Outlet />
  );
};

export default PageInitialiserOutlet;
