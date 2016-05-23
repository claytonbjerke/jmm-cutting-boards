import Immutable from 'immutable';
import {
  OPEN_SIDE_NAV,
  CLOSE_SIDE_NAV,
  TOGGLE_SIDE_NAV
} from './nav-actions';
const defaultState = new Immutable.List();

export default function navReducer(state = defaultState, action) {
  switch (action.type) {
    case OPEN_SIDE_NAV:
      return {
        ...state,
        active: true
      };
    case CLOSE_SIDE_NAV:
      return {
        ...state,
        active: false
      };
    case TOGGLE_SIDE_NAV:
      return {
        ...state,
        active: !state.active
      };
    default:
      return state;
  }
}
