import { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useClearAlert } from './alert.hooks';

const AlertWrapper = ({ children }) => {
  const { pathname } = useLocation();
  const clearAlert = useClearAlert();

  useLayoutEffect(() => {
    clearAlert();
  }, [clearAlert, pathname]);

  return children;
};

AlertWrapper.defaultProps = {
  children: null
};

AlertWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default AlertWrapper;
