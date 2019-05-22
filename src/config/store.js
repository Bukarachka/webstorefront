import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AuthReducer from '../reducers/auth';
import PostReducer from '../reducers/post';
import OrderReducer from '../reducers/order';

const rootReducer = combineReducers({
    AuthReducer,
    PostReducer,
    OrderReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
