import { combineReducers } from 'redux';
import user from './reducer_user';
import products from './reducer_products';
import site from './reducer_site';

const rootReducer = combineReducers({
    user,
    products,
    site
})

export default rootReducer;