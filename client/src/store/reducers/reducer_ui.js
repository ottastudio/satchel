import {
    OPEN_MODULE,
    CLOSE_MODULE,
    GET_MODULE
} from '../actions/types';

const initialState = {
    module: []
}

export default function (state = {}, action) {
    switch (action.type) {
        case OPEN_MODULE:
            return { ...state, module: action.payload }

        case CLOSE_MODULE:
            return { ...state, module: action.payload }

        case GET_MODULE:
            return { ...state, module: action.payload }

        default:
            return state;
    }
}