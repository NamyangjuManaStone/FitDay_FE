import { authInstance, userInstance } from './config/instance';

const userAPIs = {
  signupAPI: (body) => authInstance.post('/signup', body),
  loginAPI: (body) => authInstance.post('/login', body),
  checkMeAPI: () => userInstance.get('/checkMe'),
  changeNicknameAPI: (body) => userInstance.patch('/changeNickname', body),
};

export default userAPIs;
