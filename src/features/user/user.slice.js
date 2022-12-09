import { createSlice } from '@reduxjs/toolkit';
import * as actions from './user.actions';

const initialState = {
  myData: null,
  signupLoading: false,
  signupDone: false,
  signupError: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(actions.signupAction.pending, (state) => {
      state.signupLoading = true;
      state.signupDone = false;
      state.signupError = null;
    });
    addCase(actions.signupAction.fulfilled, (state) => {
      state.signupLoading = false;
      state.signupDone = true;
    });
    addCase(actions.signupAction.rejected, (state, action) => {
      state.signupLoading = false;
      state.signupError = action.error.message;
    });
  },
});

export default userSlice.reducer;
