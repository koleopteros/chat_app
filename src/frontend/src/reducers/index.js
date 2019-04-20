import { combineReducers } from 'redux';
import authReducer from './authReducers';
import errorReducer from './errorReducers';
import socketEventReducer from './socketEventReducers';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    socket: socketEventReducer
})