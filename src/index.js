import React from 'react';
import {render} from 'react-dom';
import {compose, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './app/reducers';
//import reducers from './todo/ToDoReducer'
import App from './app/App';
import Home from './home/Home';
import References from './references/References';
import ToDo from './todo/ToDo';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = createStoreDevTools(reducer);

store.dispatch({
  type: 'SET_STATE',
  state: {
    todos: [
      {id: 1, text: 'React', status: 'active', editing: false},
      {id: 2, text: 'Redux', status: 'active', editing: false},
      {id: 3, text: 'Immutable', status: 'active', editing: false},
    ],
    filter: 'all'
  }
});

const history = syncHistoryWithStore(browserHistory, store)

require('../node_modules/todomvc-app-css/index.css');

render((
   <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/todo" component={ToDo}/>
        <Route path="/references" component={References}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
