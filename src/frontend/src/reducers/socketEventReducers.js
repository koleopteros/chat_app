import {CONNECTING, SEND_MESSAGE, UPDATE_MESSAGES, STORE_USERS_TO_STATE, ASSIGN_ROOM, STORE_MESSAGES_TO_STATE, DISCONNECTING} from '../actions/socketEventTypes';
import {socket} from '../App';

const initialState = {
    messageList: [],
    userList: [],
    name: null,
    room: null,
};

export default function (state = initialState, action) {
    switch (action.type){
        case CONNECTING:
            state = {
                ...state,
                room: action.payload
            }
            break;
        case SEND_MESSAGE:
            state = {
                ...state,
                messageList: state.messageList.concat(action.data)
            }
            socket && socket.emit(UPDATE_MESSAGES, state.messageList);
            break;
        case ASSIGN_ROOM:
            state = {
                ...state,
                name: action.payload.name,
                room: action.payload.room
            }
            break;
        case STORE_MESSAGES_TO_STATE:
            state = {
                ...state,
                messageList: action.updatedMessages.messageList
            }
            break;
        case STORE_USERS_TO_STATE:
            state = {
                ...state,
                userList: action.updatedUsers.userList
            }
            break;
        case DISCONNECTING:
            state = {
                ...state,
                room: null
            }
            socket && socket.emit('disconnect', action.name);
            break;
        default:
            break;
        
    }
    return state;
}