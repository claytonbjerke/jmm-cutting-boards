import Auth from './Auth';

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export function authenticateUser(username, password) {
  return {
    type: AUTHENTICATE_USER,
    username,
    password
  };
}

export const AUTHENTICATED_USER = 'AUTHENTICATED_USER';
export function authenticatedUser(response) {
  return {
    type: AUTHENTICATED_USER,
    response
  };
}

export const LOG_OUT = 'LOG_OUT';
export function logOut() {
  Auth.logout();
  return {
    type: LOG_OUT,
    loggedIn: false
  };
}

export function logInUser(username, password) {
  return function loginUserInnerFunc(dispatch) {
    dispatch(authenticateUser(username, password));
    return Auth.login(username, password).then((response) => {
      dispatch(authenticatedUser(response));
    });
  };
}
