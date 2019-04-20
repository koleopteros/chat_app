import {CONNECTING,DISCONNECTING} from '../actions/socketEventTypes';

const initialState = {
    room: null,
};

export default function (state = initialState, action) {
    switch (action.type){
        case CONNECTING:
            return {
                ...state,
                room: action.payload,
            }
        case DISCONNECTING:
            return {
                ...state,
                room: null,
            }
        default:
            return state;
    }
}