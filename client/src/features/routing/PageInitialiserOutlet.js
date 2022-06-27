import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useClearAlert } from 'features/alert/alert.hooks';

// TODO test clearAlert by placing log in action itself
const PageInitialiserOutlet = () => {
  console.log('outlet');
  const clearAlert = useClearAlert();
  // clearAlert();

  useEffect(() => {
    clearAlert();
  }, [clearAlert]);

  return (
    <Outlet />
  );
};

export default PageInitialiserOutlet;
