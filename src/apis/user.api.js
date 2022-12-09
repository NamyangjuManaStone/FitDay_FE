import { authInstance } from './config/instance';

const userAPIs = {
  signupAPI: (body) => authInstance.post('/signup', body),
  loginAPI: (body) => authInstance.post('/login', body),
};

export default userAPIs;
