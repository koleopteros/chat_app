import axios from 'axios';
import setAuthToken from '../utils/setAuthTOken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./authTypes";
import { apiFull, events } from '../config';

export const registerUser = (userData,history) => dispatch => {
    axios.post(`${apiFull}users/`,userData)
        .then(res => history.push('login'))
        .catch(err => dispatch({type:GET_ERRORS, payload: null }));
};

export const loginUser = userData => dispatch => {
    axios.post(`${apiFull}users/login`,userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken',token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            axios.post('api/v0/events/newEvent',{
                type: events.login,
                timestamp: Date.now(),
                user: userData.name,
                val:null
            });
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => dispatch({ type: GET_ERRORS, payload: null }));
};

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload:decoded
    };
};

export const setUserLoading = () => {
    return {
        type:USER_LOADING
    };
};

export const logoutUser = username => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    axios.post(`${apiFull}events/newEvent`,{
        type: events.logout,
        timestamp: Date.now(),
        user: username,
        val: null
    })
    dispatch(setCurrentUser({}));
}