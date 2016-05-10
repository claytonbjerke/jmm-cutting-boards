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

export const LOG_IN_USER = 'LOG_IN_USER';
export function logInUser(username, password) {
  return function(dispatch) {
    dispatch(authenticateUser(username, password));
    return Auth.login(username, password).then((response) => {
      dispatch(authenticatedUser(response));
    });
  };
}
