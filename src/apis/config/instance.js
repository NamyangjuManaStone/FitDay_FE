import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

const instance = (endPoint) =>
  axios.create({
    baseURL: `${BASE_URL}/${endPoint}`,
    withCredentials: true,
  });

export const authInstance = instance('users');
