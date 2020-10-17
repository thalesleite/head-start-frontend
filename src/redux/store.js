import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

let middleware = [];
if (process.env.NODE_ENV === 'development') {
    middleware = [...middleware, thunk, logger];
} else {
    middleware = [...middleware, thunk];
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;