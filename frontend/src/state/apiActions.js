import Axios from "axios";
import {BY_CATEGORY, CATEGORIES, PRODUCT, PRODUCTS, ARRIVALS} from "./apiConstants";

let uri;

if (process.env.NODE_ENV === 'development') {
    uri = 'http://localhost:4000';
} else {
    uri = process.env.REACT_APP_SHOP_URL;
}

const apiCall = (name, url) => async (dispatch) => {
    dispatch({type: `${name}_REQUEST`});
    try {
        const { data } = await Axios.get(url);
        dispatch({type: `${name}_SUCCESS`, payload: data})
    } catch(error) {
        dispatch({type: `${name}_FAIL`, payload: error.message})
    }
}

export const getCategoriesState = () => apiCall(CATEGORIES, uri + '/categories');
export const getByCategory = () => apiCall(BY_CATEGORY, uri + '/categories/bycategory');
export const getArrivals = () => apiCall(ARRIVALS, uri + '/products/arrivals');
export const getProductState = (id) => apiCall(PRODUCT, uri + `/product/${id}`);
export const getProductsState = (category, page) => apiCall(PRODUCTS, uri + `/products/${category}/${page}`);
