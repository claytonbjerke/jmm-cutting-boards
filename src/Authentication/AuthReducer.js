import Immutable from 'immutable';
import Auth from './Auth';
const defaultState = new Immutable.List();

const loginUser = (username, password) => {
  Auth.login(username, password);
  return true;
};

export default function authReducer(state = defaultState, action) {
  switch (action.type) {
    case 'AUTH_USER':
      return {
        ...state,
        loggedIn: loginUser(action.username, action.password)
      };
    default:
      return state;
  }
}
