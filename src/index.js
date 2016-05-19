import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';

import store from './store/configureStore';
import App from './app/app';
import Home from './home/home-page';
import LoginPage from './login/login-page';
import Dashboard from './dashboard/dashboard-page';
import SignUpPage from './sign-up/sign-up-page';

/*
TODO:
- need app init action for initial launch to check login cred and if token still
  stored in local storage (react-redux-router??)
- redux actions for nav events
  - https://github.com/reactjs/react-router-redux#what-if-i-want-to-issue-navigation-events-via-redux-actions
- Chrome ext. seems buggy, use: https://github.com/gaearon/redux-devtools-dock-monitor
  - this also allows for other devs to share dev tool settings
 */

const requireAuth = (nextState, replace) => {
  const loggedIn = true;
  if (!loggedIn) {
    replace({
      pathname: '/login',
      state: {
        nextPathname: nextState.location.pathname
      }
    });
  }
};

const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/dashboard" component={Dashboard} onEnter={requireAuth}/>
        <Route path="/sign-up" component={SignUpPage}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
