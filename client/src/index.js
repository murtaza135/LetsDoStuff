import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { initialiseAuth } from 'features/auth/auth.slice';
import { authApiSlice } from 'features/auth/auth.apislice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import App from './App';

store.dispatch(initialiseAuth());
store.dispatch(authApiSlice.endpoints.getProfile.initiate());

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
