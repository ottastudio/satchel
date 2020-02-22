import {
    TOGGLE_MENU,
    TOGGLE_ACCOUNT,
    TOGGLE_CART,
    TOGGLE_SEARCH,
    TURN_ALL_FALSE,
    TOGGLE_DASHBOARD_MENU,
    TOGGLE_DASHBOARD_MENU_FALSE
} from '../actions/types';

let initialState = {
    menu: false,
    account: false,
    cart: false,
    search: false,
    dashboardMenu: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MENU:
            return {
                ...state,
                menu: !state.menu,
                account: false,
                cart: false,
                search: false
            }

        case TOGGLE_ACCOUNT:
            return {
                ...state,
                menu: false,
                account: !state.account,
                cart: false,
                search: false
            }

        case TOGGLE_CART:
            return {
                ...state,
                menu: false,
                account: false,
                cart: !state.cart,
                search: false
            }

        case TOGGLE_SEARCH:
            return {
                ...state,
                menu: false,
                account: false,
                cart: false,
                search: !state.search
            }

        case TURN_ALL_FALSE:
            return {
                ...state,
                menu: false,
                account: false,
                cart: false,
                search: false
            }

        case TOGGLE_DASHBOARD_MENU:
            return {
                ...state,
                dashboardMenu: !state.dashboardMenu
            }
            
        case TOGGLE_DASHBOARD_MENU_FALSE:
            return {
                ...state,
                dashboardMenu: false
            }

        default:
            return state;
    }
}