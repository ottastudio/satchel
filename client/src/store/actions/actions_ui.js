import {
    OPEN_MODULE,
    CLOSE_MODULE,
    GET_MODULE
} from './types';

export function openModule(payload) {
    return {
        type: OPEN_MODULE,
        payload: true
    }
}
export function closeModule(payload) {
    return {
        type: CLOSE_MODULE,
        payload: false
    }
}

export function getModule(){
    return {
        type: GET_MODULE,
        payload: false
    }
}