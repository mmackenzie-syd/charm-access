import Axios from "axios";
import {CATEGORY_SLIDES, CATEGORIES, PRODUCTS, ARRIVAL_SLIDES, SEARCH} from "./apiConstants";

const uri = process.env.REACT_APP_SHOP_URL;

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
export const getCategorySlides = () => apiCall(CATEGORY_SLIDES, uri + '/categorySlides');
export const getArrivalSlides = () => apiCall(ARRIVAL_SLIDES, uri + '/arrivalSlides');
export const getProductsState = (category, page) => apiCall(PRODUCTS, uri + `/productsByCategory/${category}/${page}`);
export const getSearchState = (searchString, page) => apiCall(SEARCH, uri + `/search/${page}/${searchString}`);
