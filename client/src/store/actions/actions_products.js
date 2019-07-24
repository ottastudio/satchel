import axios from 'axios';
import { PRODUCT_SERVER } from './../misc';
import {
    GET_PRODUCTS_BY_ARRIVAL,
    GET_BRANDS,
    GET_PRODUCT_DETAIL,
    CLEAR_PRODUCT_DETAIL
} from './types';

export function getProductDetail(id){

    const request = axios.get(`${PRODUCT_SERVER}/articles_by_id?id=${id}&type=single`)
    .then(response=>{
        return response.data[0]
    });

    return {
        type: GET_PRODUCT_DETAIL,
        payload: request
    }

}

export function clearProductDetail(){
    return {
        type: CLEAR_PRODUCT_DETAIL,
        payload:''
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

export function getProductsByArrival() {
    const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=6`)
        .then(response => response.data);

    return {
        type: GET_PRODUCTS_BY_ARRIVAL,
        payload: request
    }
}