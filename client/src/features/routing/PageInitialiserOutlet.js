import React from 'react';
import { Outlet } from 'react-router-dom';
import { useClearAlert } from 'features/alert/alert.hooks';

const PageInitialiserOutlet = () => {
  const clearAlert = useClearAlert();
  clearAlert();

  return (
    <Outlet />
  );
};

export default PageInitialiserOutlet;
