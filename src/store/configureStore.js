import reduxThunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import rootReducer from '.././app/app-reducers';

const store = createStore(rootReducer, compose(
  applyMiddleware(
    reduxThunk
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

if (module.hot) {
  module.hot.accept('.././app/app-reducers', () => {
    const nextReducer = require('.././app/app-reducers').default;
    store.replaceReducer(nextReducer);
  });
}

export default store;
