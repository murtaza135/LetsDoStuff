import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from 'features/api/api.slice';
import authReducer from 'features/auth/auth.slice';
import alertReducer from 'features/alert/alert.slice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    alert: alertReducer,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(apiSlice.middleware)
  )
});
