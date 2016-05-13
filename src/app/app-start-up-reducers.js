import Immutable from 'immutable';
import {
  APP_START_UP
} from './app-start-up-actions';

const defaultState = new Immutable.List();

export default function appStartUpReducer(state = defaultState, action) {
  switch (action.type) {
    case APP_START_UP:
      return {
        ...state,
        loggedIn: action.loggedIn
      };
    default:
      return state;
  }
}
