import 'whatwg-fetch';
import req from '.././services/echo-web';

/*

TODO:
- toggle between session and local storage depending on keep me logged in

 */

const url = 'https://vl0c0b3bkk.execute-api.us-east-1.amazonaws.com/prod';

const login = (username, password) => {
  if (username.toLowerCase() === 'hi' && password.toLowerCase() === 'lol') {
    return new Promise((resolve) => {
      localStorage.token = Math.random().toString(36).substring(7);
      resolve(true);
    });
  } else {
    return req.post(url, JSON.stringify({
      functionName: 'authenticateUserByName',
      email: 'kylechandler@hollywood.com',
      firstname: 'kyle',
      lastname: 'chandler',
      username: username, // 'kylechandler',
      password: password // 1612echo
    }))
    .then((res) => {
      let success = false;
      if (res.success) {
        success = res.success;
        localStorage.token = res.token;
      }
      return success;
    })
    .catch((error) => {
      console.log('request failed', error);
    });
  }
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
