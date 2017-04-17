import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import App from './components/app/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const main = document.querySelector('.main');

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , main,
);
