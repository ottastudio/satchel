import axios from 'axios';
import { SITE_SERVER } from '../misc';
import {
    GET_SITE_DATA
} from './types';

export function getSiteData() {
    const request = axios.get(`${SITE_SERVER}/site_data`)
        .then(response => response.data);

    return {
        type: GET_SITE_DATA,
        payload: request
    }
}

