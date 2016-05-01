import Immutable from 'immutable';

const defaultState = new Immutable.List();

export default function todoReducer(state = defaultState, action) {
  switch (action.type) {
    case 'AUTH_USER':
      return state.concat(action.username, action.password);
    default:
      return state;
  }
}
