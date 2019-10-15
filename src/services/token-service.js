import config from '../config';


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
  removeItems(array) {
    for (let item of array) {
      window.localStorage.removeItem(item);
    }
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
  },
  saveExpiresAt(expires_at) {
    window.localStorage.setItem('expires_at', expires_at);
  },
  getExpiresAt() {
    return window.localStorage.getItem('expires_at');
  }
};

export default TokenService;
