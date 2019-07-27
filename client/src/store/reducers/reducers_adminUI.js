import {
    TOGGLE_MANAGE_PRODUCTS,
    TOGGLE_MANAGE_BRANDS,
    TOGGLE_MANAGE_CATEGORIES,
    TOGGLE_MANAGE_USABLES
} from '../actions/types';

let initialState = {
    products: false,
    brands: false,
    categories: false,
    usable: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MANAGE_PRODUCTS:
            return {
                ...state,
                products: !state.products,
                brands: false,
                categories: false,
                usable: false
            }
        case TOGGLE_MANAGE_BRANDS:
            return {
                ...state,
                products: false,
                brands: !state.products,
                categories: false,
                usable: false
            }
        case TOGGLE_MANAGE_CATEGORIES:
            return {
                ...state,
                products: false,
                brands: false,
                categories: !state.products,
                usable: false
            }
        case TOGGLE_MANAGE_USABLES:
            return {
                ...state,
                products: false,
                brands: false,
                categories: false,
                usable: !state.products
            }
        default:
            return state;
    }
}