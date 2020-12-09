import Axios from "axios";

const uri = 'http://localhost:5000';

export const updateInventory = async (id, inventory) => {
    return Axios.put(uri + `/api/product/inventory/${id}`, { inventory });
}

export const updateProduct = async (id, product) => {
    return Axios.put(uri + `/api/product/${id}`, product);
}

export const createProduct = async (product) => {
    return Axios.post(uri + '/api/product', product);
}

export const deleteProduct = async (id) => {
    return Axios.delete(uri + `/api/product/${id}`);
}

export const getProduct = async (id) => {
    return Axios.get(uri + `/api/product/${id}`);
}

export const getProducts = async (page) => {
    return Axios.get(uri + `/api/products/${page}`);
}

export const getCategories = async () => {
    return Axios.get(uri + '/api/categories');
}

export const saveCategories = async (categories) => {
    return Axios.post(uri + '/api/categories', { categories });
}

export const getNextId = async (id) => {
    return Axios.get(uri + `/api/product/next/${id}`);
}

export const getPreviousId = async (id) => {
    return Axios.get(uri + `/api/product/previous/${id}`);
}

