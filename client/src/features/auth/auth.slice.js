/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { authApiSlice } from './authApi.slice';

export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApiSlice.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.user = payload.user;
        }
      )
      .addMatcher(
        authApiSlice.endpoints.login.matchRejected,
        (state) => {
          state.token = null;
          state.user = null;
        }
      );
  }
});

export default authSlice.reducer;
