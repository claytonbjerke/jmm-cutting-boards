/*
  TODO:
  - use redux to store token and user loggin status
 */
import {
  connect
} from 'react-redux';

export default {
  userLogin(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'hi' && password === 'lol') {
          let token = Math.random().toString(36).substring(7);
          localStorage.token = token;
          resolve({
            authenticated: true,
            token: token
          });
        } else {
          reject({
            authenticated: false
          });
        }
      }, 3000);
    });
  },
  loggedIn() {
    return Boolean(localStorage.token);
  },
  logout() {
    Reflect.deleteProperty(localStorage.token);
  }
};
