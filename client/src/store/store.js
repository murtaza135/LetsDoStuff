import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from 'features/api/api.slice';
import authReducer from 'features/auth/auth.slice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(apiSlice.middleware)
  )
});
