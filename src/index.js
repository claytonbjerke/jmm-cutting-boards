import React from 'react';
import {render} from 'react-dom';
import {compose, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app/App';
import Home from './home/Home';

injectTapEventPlugin();

render((
    <Router history={browserHistory}> 
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
), document.getElementById('app'));
