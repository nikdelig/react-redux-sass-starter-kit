import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { render } from 'react-dom';
import { createStore } from 'redux';
import App from './components/app/app';

const store = createStore(history);

const main = document.getElementById('root');


render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
  main,
);
