// helper api calls
import Axios from "axios";
const uri = 'http://localhost:4000';

export const getNextId = async (id) => {
    return Axios.get(uri + `/api/product/next/${id}`);
}

export const getPreviousId = async (id) => {
    return Axios.get(uri + `/api/product/previous/${id}`);
}
