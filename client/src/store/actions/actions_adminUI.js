import {
    TOGGLE_MANAGE_PRODUCTS,
    TOGGLE_MANAGE_BRANDS,
    TOGGLE_MANAGE_CATEGORIES,
    TOGGLE_MANAGE_USABLES
} from './types';

export const toggleProduct = () => {
    return {
        type: TOGGLE_MANAGE_PRODUCTS
    }
}
export const toggleBrand = () => {
    return {
        type: TOGGLE_MANAGE_BRANDS
    }
}
export const toggleCategory = () => {
    return {
        type: TOGGLE_MANAGE_CATEGORIES
    }
}
export const toggleUsable = () => {
    return {
        type: TOGGLE_MANAGE_USABLES
    }
}