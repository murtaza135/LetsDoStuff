/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { authApiSlice } from './authApi.slice';

export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    initialise: (state, action) => {
      state.token = action.payload.token;
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApiSlice.endpoints.register.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.user = payload.user;
          localStorage.setItem('token', payload.token);
        }
      )
      .addMatcher(
        authApiSlice.endpoints.register.matchRejected,
        (state) => {
          state.token = null;
          state.user = null;
          localStorage.removeItem('token');
        }
      )
      .addMatcher(
        authApiSlice.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.user = payload.user;
          localStorage.setItem('token', payload.token);
        }
      )
      .addMatcher(
        authApiSlice.endpoints.login.matchRejected,
        (state) => {
          state.token = null;
          state.user = null;
          localStorage.removeItem('token');
        }
      )
      .addMatcher(
        authApiSlice.endpoints.getProfile.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
        }
      )
      .addMatcher(
        authApiSlice.endpoints.updateProfile.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
        }
      )
      .addMatcher(
        authApiSlice.endpoints.deleteProfile.matchFulfilled,
        (state) => {
          state.token = null;
          state.user = null;
          localStorage.removeItem('token');
        }
      );
  }
});

export const { initialise: initialiseAuth } = authSlice.actions;

export default authSlice.reducer;
