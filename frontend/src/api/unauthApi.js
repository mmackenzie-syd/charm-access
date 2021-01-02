import Axios from "axios";

const uri = process.env.REACT_APP_SHOP_URL;

export const getNextId = async (id) => {
    return Axios.get(uri + `/productId/next/${id}`);
}

export const getPreviousId = async (id) => {
    return Axios.get(uri + `/productId/previous/${id}`);
}

export const getProduct = async (id) => {
    return Axios.get(uri + `/product/${id}`);
}

export const getProducts = async (page) => {
    return await Axios.get(uri + `/products/${page}`);
};

export const getCategories = async () => {
    return Axios.get(uri + '/categories');
}

export const searchProducts = async (page, searchString) => {
    return await Axios.get(uri + `/search/${page}/${searchString}`);
};
