import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
// import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app/App';
import Home from './home/Home';
import Login from './login/login';

// injectTapEventPlugin();

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/login" component={Login}/>
    </Route>
  </Router>
), document.getElementById('app'));
