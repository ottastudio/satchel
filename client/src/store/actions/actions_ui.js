import {
    TOGGLE_MENU,
    TOGGLE_ACCOUNT,
    TOGGLE_CART,
    TOGGLE_SEARCH,
    TURN_ALL_FALSE
} from './types';

export function toggleMenuUI(payload){
    return {
        type: TOGGLE_MENU,
        payload: payload
    }
}
export function toggleAccountUI(payload){
    return {
        type: TOGGLE_ACCOUNT,
        payload: payload
    }
}
export function toggleCartUI(payload){
    return {
        type: TOGGLE_CART,
        payload: payload
    }
}
export function toggleSearchUI(payload){
    return {
        type: TOGGLE_SEARCH,
        payload: payload
    }
}

export function turnAllFalse(){
    return {
        type: TURN_ALL_FALSE,
        // payload: false
    }
}