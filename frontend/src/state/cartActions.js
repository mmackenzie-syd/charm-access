import {ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QTY} from "./cartConstants";

export const addToCart = (item) => async (dispatch) => {
    dispatch({
        type: ADD_TO_CART,
        payload: item
    });
};

export const removeFromCart = (_id) => async (dispatch) => {
    dispatch({ type: REMOVE_FROM_CART, payload: _id });
};

export const updateCartQty = (_id, qty) => async (dispatch) => {
    dispatch({
        type: UPDATE_CART_QTY,
        payload: { _id, qty }
    });
};