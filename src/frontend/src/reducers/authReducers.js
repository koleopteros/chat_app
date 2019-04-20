import { SET_CURRENT_USER, USER_LOADING } from "../actions/authTypes";
import {socket} from '../App';
import { DISCONNECTING } from "../actions/socketEventTypes";

const isEmpty = require('is-empty');

const initialState = {
    isAuthenticated: false,
    user: {},
    loading:false,
};

export default function (state = initialState, action) {
    switch (action.type){
        case SET_CURRENT_USER:
            var user = state.user.name
            state = {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
            socket && socket.emit(DISCONNECTING, user);
            break;
        case USER_LOADING:
            state = {
                ...state,
                loading: true
            };
            break;
        default:
            break;
    }
    return state;
}