import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

/*

TODO:
- restructure the state tree
  - ex) set logged in status higher up in tree and composer auth reducers after

 */

import authReducer from '../auth/auth-reducer';
import signUpReducer from '../sign-up/sign-up-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  signUpReducer,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
