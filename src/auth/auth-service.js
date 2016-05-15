/*

TODO:
- toggle between session and local storage depending on keep me logged in

 */

const login = (username, password) => {
  return new Promise((resolve, reject) => {
    if (username === 'hi' && password === 'lol') {
      localStorage.token = Math.random().toString(36).substring(7);
      resolve(true);
    } else {
      reject(false);
    }
  });
};

const loggedIn = () => {
  return new Promise((resolve) => {
    resolve(Boolean(localStorage.token));
  });
};

const logOut = () => {
  return new Promise((resolve) => {
    delete localStorage.token;
    resolve(false);
  });
};

export default {
  login,
  loggedIn,
  logOut
};
