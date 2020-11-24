import { CATEGORIES, PRODUCTS, PRODUCT } from './apiConstants'

const apiReducer = (name) => (state = {}, action) => {
    switch (action.type) {
        case `${name}_REQUEST`:
            return {...state, loading: true}
        case `${name}_SUCCESS`:
            return {...state, loading: false, data: action.payload}
        case `${name}_FAIL`:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
};

export const categoriesReducer = apiReducer(CATEGORIES);
export const productReducer = apiReducer(PRODUCT);
export const productsReducer = apiReducer(PRODUCTS);

