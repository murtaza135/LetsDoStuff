/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { authApiSlice } from './auth.apislice';

export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    initialise: (state, action) => {
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
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

export const initialiseAuth = () => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(authSlice.actions.initialise({ token }));
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(authSlice.actions.logout());
  dispatch(authApiSlice.util.invalidateTags([{ type: 'Todo', id: 'LIST' }]));
};

export default authSlice.reducer;
