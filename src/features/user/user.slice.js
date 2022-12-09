import { createSlice } from '@reduxjs/toolkit';
import * as actions from './user.actions';

const initialState = {
  user: null, // 내 정보
  signupLoading: false,
  signupDone: false,
  signupError: null,
  loginLoading: false,
  loginDone: false,
  loginError: null,
  checkMeLoading: false,
  checkMeDone: false,
  checkMeError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutAction: (state) => {
      state.user = null;
    },
  },
  extraReducers: ({ addCase }) => {
    // 회원가입
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
    // 로그인
    addCase(actions.loginAction.pending, (state) => {
      state.loginLoading = true;
      state.loginDone = false;
      state.loginError = null;
    });
    addCase(actions.loginAction.fulfilled, (state, action) => {
      state.loginLoading = false;
      state.loginDone = true;
      state.user = action.payload.user;
    });
    addCase(actions.loginAction.rejected, (state, action) => {
      state.loginLoading = false;
      state.loginError = action.error.message;
    });
    // 내 정보 조회
    addCase(actions.checkMeAction.pending, (state) => {
      state.checkMeLoading = true;
      state.checkMeDone = false;
      state.checkMeError = null;
    });
    addCase(actions.checkMeAction.fulfilled, (state, action) => {
      state.checkMeLoading = false;
      state.checkMeDone = true;
      state.user = action.payload.user;
    });
    addCase(actions.checkMeAction.rejected, (state, action) => {
      state.checkMeLoading = false;
      state.checkMeError = action.error.message;
    });
    // 닉네임 변경
    addCase(actions.changeNicknameAction.pending, (state) => {
      state.changeNicknameLoading = true;
      state.changeNicknameDone = false;
      state.changeNicknameError = null;
    });
    addCase(actions.changeNicknameAction.fulfilled, (state, action) => {
      state.changeNicknameLoading = false;
      state.changeNicknameDone = true;
      state.user = action.payload.user;
    });
    addCase(actions.changeNicknameAction.rejected, (state, action) => {
      state.changeNicknameLoading = false;
      state.changeNicknameError = action.error.message;
    });
  },
});

export const { logoutAction } = userSlice.actions;

export default userSlice.reducer;
