import {
    CATEGORY_LIST_FAIL,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS
} from "../constants/categoryConstants";
import Axios from "axios";

import config from "../config";

const { api } = config;

export const listCategories = () => async (dispatch) => {
    dispatch({type: CATEGORY_LIST_REQUEST});
    try {
        const { data } = await Axios.get(`/api/categories`);
        dispatch({type: CATEGORY_LIST_SUCCESS, payload: data})
    } catch(error) {
        dispatch({type: CATEGORY_LIST_FAIL, payload: error.message})
    }
}
