import Axios from "axios";

import { getToken } from "../state/userActions";

let uri;
if (process.env.NODE_ENV === 'development') {
    uri = 'http://localhost:5000';
} else {
    uri = process.env.REACT_APP_VENDOR_URL;
}

export const updateInventory = async (id, inventory) => {
    const token = await getToken();
    return Axios.put(uri + `/product/inventory/${id}`, { inventory }, {
        headers: {
            'Authorization': token
        }
    });
}

export const updateProduct = async (id, product) => {
    const token = await getToken();
    return Axios.put(uri + `/product/${id}`, product,{
        headers: {
            'Authorization': token
        }
    });
}

export const createProduct = async (product) => {
    const token = await getToken();
    return Axios.post(uri + '/product', product,{
        headers: {
            'Authorization': token
        }
    });
}

export const deleteProduct = async (id) => {
    const token = await getToken();
    return Axios.delete(uri + `/product/${id}`,{
        headers: {
            'Authorization': token
        }
    });
}

export const getProduct = async (id) => {
    const token = await getToken();
    return Axios.get(uri + `/product/${id}`, {
        headers: {
            'Authorization': token
        }
    });
}

export const getProducts = async (page) => {
    const token = await getToken();
    return await Axios.get(uri + `/products/${page}`, {
        headers: {
            'Authorization': token
        }
    });
};

export const getCategories = async () => {
    const token = await getToken();
    return Axios.get(uri + '/categories', {
        headers: {
            'Authorization': token,
        }
    });
}

export const saveCategories = async (categories) => {
    const token = await getToken();
    return Axios.post(uri + '/categories', { categories }, {
        headers: {
            'Authorization': token
        }
    });
}

export const getNextId = async (id) => {
    const token = await getToken();
    return Axios.get(uri + `/product/next/${id}`, {
        headers: {
            'Authorization': token
        }
    });
}

export const getPreviousId = async (id) => {
    const token = await getToken();
    return Axios.get(uri + `/product/previous/${id}`, {
        headers: {
            'Authorization': token
        }
    });
}

