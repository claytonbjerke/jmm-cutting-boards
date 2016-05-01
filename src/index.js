import React from 'react';
import {render} from 'react-dom';
import {combineReducers, createStore, compose} from 'redux';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';

import * as reducers from './app/reducers';
import App from './app/App';
import Home from './home/Home';
import Login from './login/login';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const createStoreDevTools = compose(window.devToolsExtension
  ? window.devToolsExtension()
  : f => f)(createStore);
const store = createStoreDevTools(reducer);

const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/login" component={Login}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
