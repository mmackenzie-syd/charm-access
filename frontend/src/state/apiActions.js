import Axios from "axios";
import {BY_CATEGORY, CATEGORIES, PRODUCT, PRODUCTS, ARRIVALS} from "./apiConstants";

const apiCall = (name, url) => async (dispatch) => {

    console.log('name', name, url)
    dispatch({type: `${name}_REQUEST`});
    try {
        const { data } = await Axios.get(url);
        dispatch({type: `${name}_SUCCESS`, payload: data})
    } catch(error) {
        dispatch({type: `${name}_FAIL`, payload: error.message})
    }
}

const uri = 'http://localhost:4000';

export const getCategoriesState = () => apiCall(CATEGORIES, uri + '/api/categories');
export const getByCategory = () => apiCall(BY_CATEGORY, uri + '/api/categories/bycategory');
export const getArrivals = () => apiCall(ARRIVALS, uri + '/api/products/arrivals');
export const getProductState = (id) => apiCall(PRODUCT, uri + `/api/product/${id}`);
export const getProductsState = (category, page) => apiCall(PRODUCTS, uri + `/api/products/${category}/${page}`);


