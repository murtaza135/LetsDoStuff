/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from 'features/api/api.slice';

export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        apiSlice.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.user = payload.user;
        }
      )
      .addMatcher(
        apiSlice.endpoints.login.matchRejected,
        (state) => {
          state.token = null;
          state.user = null;
        }
      );
  }
});

export default authSlice.reducer;
