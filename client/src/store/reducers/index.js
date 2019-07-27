import { combineReducers } from 'redux';
import user from './reducer_user';
import products from './reducer_products';
import site from './reducer_site';
import ui from './reducer_ui';
import admin from './reducers_adminUI';

const rootReducer = combineReducers({
    products,
    site,
    user,
    ui,
    admin
})

export default rootReducer;