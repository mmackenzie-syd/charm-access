import Axios from "axios";
import {BY_CATEGORY, CATEGORIES, PRODUCT, PRODUCTS, ARRIVALS, VENDOR_PRODUCT, VENDOR_PRODUCTS} from "./apiConstants";

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

export const getCategories = () => apiCall(CATEGORIES, '/api/categories');
export const getByCategory = () => apiCall(BY_CATEGORY, '/api/categories/bycategory');
export const getArrivals = () => apiCall(ARRIVALS, '/api/products/arrivals');
export const getProduct = (id) => apiCall(PRODUCT, `/api/products/${id}`);
export const getProducts = (category, page) => apiCall(PRODUCTS, `/api/products/${category}/${page}`);

// vendor CRUD

export const getVendorProduct = (id) => apiCall(VENDOR_PRODUCT, `/vendor/product/${id}`);
export const getVendorProducts = (page) => apiCall(VENDOR_PRODUCTS, `/vendor/products/${page}`);
