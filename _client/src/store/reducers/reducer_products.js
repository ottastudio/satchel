import {
    GET_PRODUCTS_BY_ARRIVAL,
    GET_PRODUCT_DETAIL,
    CLEAR_PRODUCT_DETAIL,
    ADD_PRODUCT,
    GET_BRANDS,
    GET_CATEGORIES,
    GET_USABLES,
    GET_SERIES,
    GET_GENDERS
} from './../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_PRODUCTS_BY_ARRIVAL:
            return { ...state, byArrival: action.payload }

        case GET_PRODUCT_DETAIL:
            return { ...state, detail: action.payload }

        case CLEAR_PRODUCT_DETAIL:
            return { ...state, detail: action.payload }

        case ADD_PRODUCT:
            return { ...state, addProduct: action.payload }



        

        case GET_BRANDS:
            return { ...state, brands: action.payload }

        case GET_CATEGORIES:
            return { ...state, categories: action.payload }

        case GET_USABLES:
            return { ...state, usables: action.payload }

        case GET_SERIES:
            return { ...state, series: action.payload }

        case GET_GENDERS:
            return { ...state, genders: action.payload }

        default:
            return state;
    }
}