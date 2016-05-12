import React from 'react';
import {render} from 'react-dom';
import reduxThunk from 'redux-thunk';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';

import App from './app/App';
import Home from './home/Home';
import LoginPage from './login/login-page';
import Dashboard from './dashboard/dashboard';
import auth from './Authentication/Auth';
import * as reducers from './app/reducers';

/*
TODO:
- need app init action for initial launch to check login cred and if token still
  stored in local storage (react-redux-router??)
 */

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: {
        nextPathname: nextState.location.pathname
      }
    });
  }
};

let rootReducer = combineReducers({
  ...reducers
});
const logger = createLogger();
let store = createStore(
  rootReducer,
  applyMiddleware(
    reduxThunk,
    logger
  )
);

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/dashboard" component={Dashboard} onEnter={requireAuth}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
