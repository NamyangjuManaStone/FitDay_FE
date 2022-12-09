import { tokenCookie } from '../../utils/cookie';

const interceptors = (instance) => {
  instance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${tokenCookie.getCookie()}`;
      return config;
    },
    (error) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
  );

  return instance;
};

export default interceptors;
