import Axios from "axios";
import {CATEGORIES, PRODUCT, PRODUCTS} from "./apiConstants";

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
export const getProduct = (id) => apiCall(PRODUCT, `/api/product/${id}`);
export const getProducts = (category, page) => apiCall(PRODUCTS, `/api/products/${category}/${page}`);
