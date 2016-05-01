/*
  TODO:
  - use redux to store token and user loggin status
 */


export default {
  userLogin(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'hi' && password === 'lol') {
          resolve({
            authenticated: true,
            token: Math.random().toString(36).substring(7)
          });
        } else {
          reject({ authenticated: false });
        }
      }, 5000);
    });
  },
  loggedIn() {
    return Boolean(localStorage.token);
  }
};
