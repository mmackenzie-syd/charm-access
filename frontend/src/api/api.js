import Axios from "axios";

export const updateInventory = async (id, inventory) => {
    return Axios.put(`/vendor/product/inventory/${id}`, { inventory });
}

export const updateProduct = async (id, product) => {
    return Axios.put(`/vendor/product/${id}`, product);
}

export const createProduct = async (product) => {
    return Axios.post('/vendor/product', product);
}

export const deleteProduct = async (id) => {
    return Axios.delete(`/vendor/product/${id}`);
}

export const getProduct = async (id) => {
    return Axios.get(`/vendor/product/${id}`);
}

export const getProducts = async (page) => {
    return Axios.get(`/vendor/products/${page}`);
}

export const getCategories = async () => {
    return Axios.get('/vendor/categories');
}

export const saveCategories = async (categories) => {
    return Axios.post('/vendor/categories', { categories });
}
