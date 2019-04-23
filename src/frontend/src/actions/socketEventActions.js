import axios from 'axios';
import config, {apiFull} from '../config';
import {CONNECTING,DISCONNECTING, ASSIGN_ROOM} from './socketEventTypes';

// Dispatches resulting from actual Socket Events are located in ./socket.js

/**
 * 
 * @param {user, room} data 
 */
export const connectUser = data => dispatch => {
    dispatch({type: ASSIGN_ROOM, payload: data});
};

export const disconnectUser = data => dispatch => {
    console.log(data)
    if(data.room != null){
        axios.post(`${apiFull}events/newEvent`,{
            type: DISCONNECTING,
            timestamp: Date.now(),
            user: data.user,
            val: null
        }).then(res => { dispatch({type: DISCONNECTING});
        }).catch(err => { dispatch({type: config.events.err, payload: null}) });
    }
};

export const setCurrentRoom = room => {
    return {
        type: CONNECTING,
        payload:room
    };
};