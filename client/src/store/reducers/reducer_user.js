import {
    AUTH_USER,
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    GET_USERS,
} from './../actions/types';

export default function (state = { }, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }

        case REGISTER_USER:
            return { ...state, register: action.payload }

        case AUTH_USER:
            return { ...state, userData: action.payload }

        case LOGOUT_USER:
            return { ...state }

        case GET_USERS:
            return { ...state, users: action.payload }

        default:
            return state;
    }
}