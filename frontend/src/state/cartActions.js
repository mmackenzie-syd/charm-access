import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartConstants";

export const addToCart = (product, qty) => async (dispatch) => {
    dispatch({
        type: ADD_TO_CART,
        payload: { ...product, qty }
    });
};

export const removeFromCart = (_id) => async (dispatch) => {
    dispatch({ type: REMOVE_FROM_CART, payload: _id });
};