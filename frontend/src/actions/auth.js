import axios from 'axios';
import { setAlert } from './alert';
import { 
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
 } from "./types";

export const login = (email, password) => async dispatch => {
    const config = {
        Headers: {
            'Content-type' : 'application/json'
        }
    }

    const body = JSON.stringify({email, password});

    try {
        const response = await axios.post('http://localhost/api/token/', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        });

        dispatch(setAlert('Authenticated Successfully', 'success'));
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        });

        dispatch(setAlert('Error Authenticating', 'error'));
    }
 }

 export const sinup = (name, email, password, password2) => async dispatch => {
    const config = {
        Headers: {
            'Content-type' : 'application/json'
        }
    }

    const body = JSON.stringify({name, email, password, password2});

    try {
        const response = await axios.post('http://localhost/api/accounts/signup', body, config);

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: response.data
        });

        dispatch(login(email, password));
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL
        });

        dispatch(setAlert('Error Authenticating', 'error'));
    }
 }

 export default logout = () => dispatch => {
    dispatch(setAlert('logout successfully', 'message'))
    dispatch({type: LOGOUT})
 }