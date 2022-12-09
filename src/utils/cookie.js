import Cookies from 'js-cookie';

const COOKIE_KEY = 'token';

export const tokenCookie = {
  setCookie: (token) => Cookies.set(COOKIE_KEY, token),
  getCookie: () => Cookies.get(COOKIE_KEY),
  removeCookie: () => Cookies.remove(COOKIE_KEY),
};
