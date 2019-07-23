import axios from 'axios';
import { PRODUCT_SERVER } from './../misc';
import {
    GET_PRODUCTS_BY_ARRIVAL,
    GET_BRANDS
} from './types';

export function getBrands() {
    const request = axios.get(`${PRODUCT_SERVER}/brands`)
    .then(response => response.data);

    return {
        type: GET_BRANDS,
        payload: request
    }
}

export function getProductsByArrival() {
    const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
        .then(response => response.data);

    return {
        type: GET_PRODUCTS_BY_ARRIVAL,
        payload: request
    }
}