/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
  name: 'error',
  initialState: { message: null, variant: null },
  reducers: {
    setAlert: (state, action) => {
      state.message = action.payload.message;
      state.variant = action.payload.variant;
    },
    clearAlert: (state) => {
      state.message = null;
      state.variant = null;
    }
  }
});

export const { setAlert, clearAlert } = alertSlice.actions;

export default alertSlice.reducer;
