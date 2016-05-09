/*

TODO:
- toggle between session and local storage depending on keep me logged in

 */


const login = (username, password) => {
  return new Promise((resolve, reject) => {
    if (username === 'hi' && password === 'lol') {
      localStorage.token = Math.random().toString(36).substring(7);
      resolve({
        authenticated: true
      });
    } else {
      reject({
        authenticated: false
      });
    }
  });
};

const loggedIn = () => {
  return Boolean(localStorage.token);
};

const logout = () => {
  delete localStorage.token;
};

export default {
  login,
  loggedIn,
  logout
};
