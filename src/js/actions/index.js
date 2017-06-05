import { createStore, combineReducers, applyMiddleware } from 'redux';

const set = (state = '', action) => {
    switch (action.type) {
        case 'SET':
            return action.name;
        default:
            return state;
    }
};

const mode = combineReducers({
    set,
});


export default createStore(mode, {}, applyMiddleware());
