import axios from 'axios';
import config, {apiFull} from '../config';
import {CONNECTING,DISCONNECTING} from './socketEventTypes';

export const connectUser = data => dispatch => {
    axios.post(`${apiFull}/events/newEvent`, {
        type: CONNECTING,
        timestamp: Date.now(),
        user: data.user,
        val: data.room,
    }).then(res=> {dispatch(setCurrentRoom(data.room));
    }).catch(err => { dispatch({type: config.events.err, payload: null}) });
};

export const disconnectUser = data => dispatch => {
    console.log(data)
    if(data.room != null){
        axios.post(`${apiFull}/events/newEvent`,{
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