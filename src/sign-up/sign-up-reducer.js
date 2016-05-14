import Immutable from 'immutable';

import {
  SUBMIT_SIGN_UP_FORM,
  SUBMIT_SIGN_UP_FORM_RESPONSE
} from './sign-up-actions';
const defaultState = new Immutable.List();

export default function signUpReducer(state = defaultState, action) {
  switch (action.type) {
    case SUBMIT_SIGN_UP_FORM:
      return {
        ...state,
        form: action.form
      };
    case SUBMIT_SIGN_UP_FORM_RESPONSE:
      return {
        ...state,
        status: action.response
      };
    default:
      return state;
  }
}
