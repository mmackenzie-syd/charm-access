import Axios from "axios";

export const updateInventory = async (id, inventory) => {
    return Axios.put(`/vendor/product/inventory/${id}`, { inventory });
}

export const deleteProduct = async (id) => {
    return Axios.delete(`/vendor/product/${id}`);
}