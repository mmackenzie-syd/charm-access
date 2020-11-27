import Axios from "axios";
import {BY_CATEGORY, CATEGORIES, PRODUCT, PRODUCTS, ARRIVALS} from "./apiConstants";

const apiCall = (name, url) => async (dispatch) => {
    dispatch({type: `${name}_REQUEST`});
    try {
        const { data } = await Axios.get(url);
        dispatch({type: `${name}_SUCCESS`, payload: data})
    } catch(error) {
        dispatch({type: `${name}_FAIL`, payload: error.message})
    }
}

export const getCategories = () => apiCall(CATEGORIES, '/api/categories');
export const getByCategory = () => apiCall(BY_CATEGORY, '/api/categories/bycategory');
export const getArrivals = () => apiCall(ARRIVALS, '/api/products/arrivals');
export const getProduct = (id) => apiCall(PRODUCT, `/api/products/${id}`);
export const getProducts = (category, page) => apiCall(PRODUCTS, `/api/products/${category}/${page}`);
