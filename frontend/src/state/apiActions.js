import Axios from "axios";
import {CATEGORY_SLIDES, CATEGORIES, PRODUCT, PRODUCTS, ARRIVAL_SLIDES} from "./apiConstants";

const uri = process.env.REACT_APP_SHOP_URL;

const apiCall = (name, url) => async (dispatch) => {
    dispatch({type: `${name}_REQUEST`});
    try {
        const { data } = await Axios.get(url);
        console.log('data', data)
        dispatch({type: `${name}_SUCCESS`, payload: data})
    } catch(error) {
        console.log('err mssg', error)
        dispatch({type: `${name}_FAIL`, payload: error.message})
    }
}

export const getCategoriesState = () => apiCall(CATEGORIES, uri + '/categories');
export const getCategorySlides = () => apiCall(CATEGORY_SLIDES, uri + '/categorySlides');
export const getArrivalSlides = () => apiCall(ARRIVAL_SLIDES, uri + '/arrivalSlides');
export const getProductsState = (category, page) => apiCall(PRODUCTS, uri + `/productsByCategory/${category}/${page}`);
