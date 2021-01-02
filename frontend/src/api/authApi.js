import Axios from "axios";
import AWS_WRAPPER from "../services/AWS_WRAPPER";
const { UserService } = AWS_WRAPPER;

const uri = process.env.REACT_APP_VENDOR_URL;

export const updateInventory = async (id, inventory) => {
    const token = await UserService.getToken();
    return Axios.put(uri + `/product/inventory/${id}`, { inventory }, {
        headers: {
            'Authorization': token
        }
    });
}

export const updateProduct = async (id, product) => {
    const token = await UserService.getToken();
    return Axios.put(uri + `/product/${id}`, product,{
        headers: {
            'Authorization': token
        }
    });
}

export const createProduct = async (product) => {
    const token = await UserService.getToken();
    return Axios.post(uri + '/product', product,{
        headers: {
            'Authorization': token
        }
    });
}

export const deleteProduct = async (id) => {
    const token = await UserService.getToken();
    return Axios.delete(uri + `/product/${id}`,{
        headers: {
            'Authorization': token
        }
    });
}

export const saveCategories = async (categories) => {
    const token = await UserService.getToken();
    return Axios.post(uri + '/categories', { categories }, {
        headers: {
            'Authorization': token
        }
    });
}

export const resetCategories = async () => {
    const token = await UserService.getToken();
    return Axios.get(uri + '/categories/seed', {
        headers: {
            'Authorization': token
        }
    });
}

export const resetProducts = async () => {
    const token = await UserService.getToken();
    return Axios.get(uri + '/products/seed', {
        headers: {
            'Authorization': token
        }
    });
}

