// helper api calls
import Axios from "axios";
import config from '../config.js';

const uri = config.shopApi;

export const getNextId = async (id) => {
    return Axios.get(uri + `/product/next/${id}`);
}

export const getPreviousId = async (id) => {
    return Axios.get(uri + `/product/previous/${id}`);
}
