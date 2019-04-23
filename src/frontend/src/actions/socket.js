import io from 'socket.io-client';
import config from '../config';
import { UPDATE_MESSAGES, STORE_MESSAGES_TO_STATE, SEND_CURRENT_USERS, SEND_CURRENT_MESSAGES, STORE_USERS_TO_STATE, SEND_MESSAGE, GET_MESSAGES, JOIN_ROOM } from './socketEventTypes';


const socket = io();

const configureSocket = dispatch => {
    socket.on('connect',() => {
        console.log('connected!');
    });
    socket.on(UPDATE_MESSAGES, messageList => {
        dispatch({type: STORE_MESSAGES_TO_STATE, updatedMessages: messageList});
    });
    socket.on(SEND_CURRENT_MESSAGES, messageList => {
        dispatch({ type: STORE_MESSAGES_TO_STATE, updatedMessages: messageList});
    })
    socket.on(SEND_CURRENT_USERS, userList => {
        dispatch({type: STORE_USERS_TO_STATE, updatedUsers: userList});
    })
}
/**
 * Call by component on constructor
 */
export const getMessages = () => {
    socket.emit(GET_MESSAGES);
}
/**
 * Call by reducer via dispatch
 * @param {user, room, message} data 
 */
export const sendMessage = data => {
    socket.emit(SEND_MESSAGE,data);
}
/**
 * Call on first entry to /chatroom
 * @param {user,room} data 
 */
export const joinRoom = data => {
    socket.emit(JOIN_ROOM,data);
}
export default configureSocket;
