import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './app/App';
import Home from './home/Home';
import LoginPage from './login/login-page';
import Dashboard from './dashboard/dashboard';
import auth from './Authentication/Auth';
import * as reducers from './app/reducers';

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

let app = combineReducers({
  ...reducers
});

render((
  <Provider store={createStore(app)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/dashboard" component={Dashboard} onEnter={requireAuth}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
