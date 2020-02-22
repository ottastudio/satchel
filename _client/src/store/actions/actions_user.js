import axios from 'axios';
import { USER_SERVER } from '../misc';
import {
    AUTH_USER,
    REGISTER_USER,
    LOGIN_USER,
    LOGOUT_USER,
    GET_USERS
} from './types';

export function getUsers() {
    const request = axios.get(`${USER_SERVER}`)
        .then(response => response.data);

    return {
        type: GET_USERS,
        payload: request
    }
}

export function registerUser(dataToSubmit) {
    const request = axios.post(`${USER_SERVER}/register`, dataToSubmit)
        .then(response => response.data);

    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function loginUser(dataToSubmit) {
    const request = axios.post(`${USER_SERVER}/login`, dataToSubmit)
        .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function auth() {
    const request = axios.get(`${USER_SERVER}/auth`)
        .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    }
}

export function logoutUser() {
    const request = axios.get(`${USER_SERVER}/logout`)
        .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}