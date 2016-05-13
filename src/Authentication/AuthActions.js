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
  return {
    type: LOG_OUT
  };
}

export const LOGGED_OUT = 'LOGGED_OUT';
export function loggedOut(loggedIn) {
  return {
    type: LOGGED_OUT,
    loggedIn
  };
}

export const APP_START_UP = 'APP_START_UP';
export function appStartup() {
  return {
    type: APP_START_UP
  };
}

export const APP_START_UP_FINISHED = 'APP_START_UP_FINISHED';
export function appStartUpFinished(loggedIn) {
  return {
    type: APP_START_UP_FINISHED,
    loggedIn
  };
}

export function appStartUp() {
  return function appStartUpInnerFunc(dispatch) {
    dispatch(appStartup());
    return Auth.loggedIn().then((loggedIn) => {
      dispatch(appStartUpFinished(loggedIn));
    });
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

export function logOutUser() {
  return function logOutUserInnerFunc(dispatch) {
    dispatch(logOut());
    return Auth.logOut().then((loggedIn) => {
      dispatch(loggedOut(loggedIn));
    });
  };
}
