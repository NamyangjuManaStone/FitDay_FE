import axios from 'axios';
import interceptors from './interceptors';

const BASE_URL = 'http://localhost:8000';

const instance = (endPoint) =>
  axios.create({
    baseURL: `${BASE_URL}/${endPoint}`,
    withCredentials: true,
  });

//* 로그인 후 요청
const instanceWithAuth = (endPoint) => {
  const instance = axios.create({
    baseURL: `${BASE_URL}/${endPoint}`,
    withCredentials: true,
  });
  return interceptors(instance);
};

export const authInstance = instance('users');
export const userInstance = instanceWithAuth('users');
