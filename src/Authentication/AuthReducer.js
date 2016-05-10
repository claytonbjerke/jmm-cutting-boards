import Immutable from 'immutable';
import Auth from './Auth';
import {
  AUTHENTICATE_USER,
  AUTHENTICATED_USER
} from './AuthActions';
const defaultState = new Immutable.List();

export default function authReducer(state = defaultState, action) {
  switch (action.type) {
    case 'AUTH_USER':
      Auth.login(action.username, action.password);
      return state;
    case AUTHENTICATE_USER:
      return {
        ...state,
        isFetching: true
      };
    case AUTHENTICATED_USER:
      return {
        ...state,
        isFetching: false,
        response: action.response
      };
    default:
      return state;
  }
}
