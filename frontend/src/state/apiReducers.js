import {
    CATEGORIES,
    PRODUCTS,
    CATEGORY_SLIDES,
    ARRIVAL_SLIDES,
} from './apiConstants'

const apiReducer = (name) => (state = {}, action) => {
    switch (action.type) {
        case `${name}_REQUEST`:
            return {...state, loading: true}
        case `${name}_SUCCESS`:
            return {...state, loading: false, data: action.payload, error: null}
        case `${name}_FAIL`:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
};

export const categoriesReducer = apiReducer(CATEGORIES);
export const categorySlidesReducer = apiReducer(CATEGORY_SLIDES);
export const arrivalSlidesReducer = apiReducer(ARRIVAL_SLIDES);
export const productsReducer = apiReducer(PRODUCTS);
