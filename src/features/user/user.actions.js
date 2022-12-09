import { createAsyncThunk } from '@reduxjs/toolkit';
import { userAPIs } from '../../apis';
import { tokenCookie } from '../../utils/cookie';

export const signupAction = createAsyncThunk('user/signup', async (body) => {
  const { data } = await userAPIs.signupAPI(body);
  return data;
});

export const loginAction = createAsyncThunk('user/login', async (body) => {
  const { data } = await userAPIs.loginAPI(body);
  tokenCookie.setCookie(data.accessToken);
  return data;
});

export const checkMeAction = createAsyncThunk('user/checkMe', async () => {
  const { data } = await userAPIs.checkMeAPI();
  return data;
});

export const changeNicknameAction = createAsyncThunk('user/changeNickname', async (body) => {
  const { data } = await userAPIs.changeNicknameAPI(body);
  return data;
});
