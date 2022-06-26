/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const errorSlice = createSlice({
  name: 'error',
  initialState: { error: null },
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    }
  }
});

export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer;
