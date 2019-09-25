import config from '../config';
// import { GoogleLogin, GoogleLogout } from 'react-google-login';

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  getUser() {
    const user = window.localStorage.getItem('user');
    return JSON.parse(user) || {};
  },
  saveUser(user) {
    window.localStorage.setItem('user', JSON.stringify(user));
  },
  clearUser() {
    window.localStorage.removeItem('user');
  }
};

export default TokenService;
