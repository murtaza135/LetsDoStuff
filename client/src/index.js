import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { initialiseAuth } from 'features/auth/auth.slice';
import { authApiSlice } from 'features/auth/authApi.slice';
import { store } from './store/store';
import App from './App';

store.dispatch(initialiseAuth());
store.dispatch(authApiSlice.endpoints.getProfile.initiate());

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
