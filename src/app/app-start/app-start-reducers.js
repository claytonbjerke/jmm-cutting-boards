import Immutable from 'immutable';
import {
  APP_START
} from './app-start-actions';

const defaultState = new Immutable.List();

export default function appStartUpReducer(state = defaultState, action) {
  switch (action.type) {
    case APP_START:
      return {
        ...state,
        loggedIn: action.loggedIn
      };
    default:
      return state;
  }
}
