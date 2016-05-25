import 'whatwg-fetch';

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
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        functionName: 'authenticateUserByName',
        password: password, // '1612echo',
        email: 'kylechandler@hollywood.com',
        firstname: 'kyle',
        lastname: 'chandler',
        username: username // 'kylechandler'
      })
    }).then((res) => {
      return res.json().then((data) => {
        let success = false;
        if (data.success) {
          success = data.success;
          localStorage.token = data.token;
        }
        return success;
      });
    }).catch((err) => {
      console.log(err);
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
