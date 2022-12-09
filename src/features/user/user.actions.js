import { createAsyncThunk } from '@reduxjs/toolkit';
import { userAPIs } from '../../apis';

export const signupAction = createAsyncThunk('user/signup', async (body) => {
  const data = await userAPIs.signupAPI(body);
  return data;
});
