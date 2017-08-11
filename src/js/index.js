import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import App from './components/App';

const root = document.getElementById('root');


render(
    <Provider>
        <Router>
            <App />
        </Router>
    </Provider>,
    root,
);
