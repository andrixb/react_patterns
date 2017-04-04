import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';

import Reducer from './reducers';
import Routes from './routes';

import AppContainer from './features/AppContainer/AppContainer';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducer)} >
      <Router
        history={browserHistory}
        routes={Routes} />
  </Provider>, document.querySelector('.container'),
);
