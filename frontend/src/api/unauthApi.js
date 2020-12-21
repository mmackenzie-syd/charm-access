// helper api calls
import Axios from "axios";

let uri;

if (process.env.NODE_ENV === 'development') {
    uri = 'http://localhost:4000';
} else {
    uri = process.env.REACT_APP_SHOP_URL;
}

export const getNextId = async (id) => {
    return Axios.get(uri + `/product/next/${id}`);
}

export const getPreviousId = async (id) => {
    return Axios.get(uri + `/product/previous/${id}`);
}
