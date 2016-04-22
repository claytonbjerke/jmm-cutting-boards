import React from 'react';
import {render} from 'react-dom';
import {compose, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import * as reducers from './app/reducers';
//import reducers from './todo/ToDoReducer'
import App from './app/App';
import Home from './home/Home';
import References from './references/References';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = createStoreDevTools(reducer);

injectTapEventPlugin();

const history = syncHistoryWithStore(browserHistory, store)

render((
   <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
