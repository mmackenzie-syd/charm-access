import {
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS
} from "../constants/productConstants";

export const productListReducer = (state = {}, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
            return { ...state, loading: true }
        case PRODUCT_LIST_SUCCESS:
            return { ...state, loading: false, pageData: action.payload }
        case PRODUCT_LIST_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}

export const productDetailsReducer = (
    state = {loading: true, product: {}},
    action
) => {
    switch(action.type) {
        case PRODUCT_DETAILS_REQUEST:
            console.log('action', action)
            return { loading: true }
        case PRODUCT_DETAILS_SUCCESS:
            console.log('action', action)
            return { loading: false, product: action.payload }
        case PRODUCT_DETAILS_FAIL:
            console.log('action', action)
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

