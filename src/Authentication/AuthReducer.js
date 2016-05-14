import Immutable from 'immutable';
import {
  AUTHENTICATE_USER,
  AUTHENTICATED_USER,
  LOG_OUT,
  LOGGED_OUT,
  APP_START_UP,
  APP_START_UP_FINISHED
} from './AuthActions';
const defaultState = new Immutable.List();

export default function authReducer(state = defaultState, action) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        isFetching: true
      };
    case AUTHENTICATED_USER:
      return {
        ...state,
        isFetching: false,
        loggedIn: action.response
      };
    case LOG_OUT:
      return state;
    case LOGGED_OUT:
      return {
        ...state,
        loggedIn: action.loggedIn
      };
    case APP_START_UP:
      return state;
    case APP_START_UP_FINISHED:
      return {
        ...state,
        loggedIn: action.loggedIn
      };
    default:
      return state;
  }
}
