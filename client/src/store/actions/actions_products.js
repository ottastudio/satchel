import axios from 'axios';
import { PRODUCT_SERVER } from './../misc';
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
} from './types';

export function getProductDetail(id) {

    const request = axios.get(`${PRODUCT_SERVER}/articles_by_id?id=${id}&type=single`)
        .then(response => {
            return response.data[0]
        });

    return {
        type: GET_PRODUCT_DETAIL,
        payload: request
    }

}

export function clearProductDetail() {
    return {
        type: CLEAR_PRODUCT_DETAIL,
        payload: ''
    }
}

export function getProductsByArrival() {
    const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=6`)
        .then(response => response.data);

    return {
        type: GET_PRODUCTS_BY_ARRIVAL,
        payload: request
    }
}

export function addProduct(datatoSubmit) {

    const request = axios.post(`${PRODUCT_SERVER}/article`, datatoSubmit)
        .then(response => response.data);

    return {
        type: ADD_PRODUCT,
        payload: request
    }
}










export function getBrands() {
    const request = axios.get(`${PRODUCT_SERVER}/brands`)
        .then(response => response.data);

    return {
        type: GET_BRANDS,
        payload: request
    }
}
export function getUsables() {
    const request = axios.get(`${PRODUCT_SERVER}/usables`)
        .then(response => response.data);

    return {
        type: GET_USABLES,
        payload: request
    }
}
export function getGenders() {
    const request = axios.get(`${PRODUCT_SERVER}/genders`)
        .then(response => response.data);

    return {
        type: GET_GENDERS,
        payload: request
    }
}
export function getCategories() {
    const request = axios.get(`${PRODUCT_SERVER}/categories`)
        .then(response => response.data);

    return {
        type: GET_CATEGORIES,
        payload: request
    }
}
export function getSeries() {
    const request = axios.get(`${PRODUCT_SERVER}/series`)
        .then(response => response.data);

    return {
        type: GET_SERIES,
        payload: request
    }
}