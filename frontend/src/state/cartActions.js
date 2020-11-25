import {ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART} from "./cartConstants";

export const addToCart = (productId, product, qty) => async (dispatch) => {
    dispatch({
        type: ADD_TO_CART,
        payload: { productId, product, qty }
    });
};

export const updateCart = (productId, qty) => async (dispatch) => {
    dispatch({
        type: UPDATE_CART,
        payload: { productId, qty }
    });

};

export const removeFromCart = (_id) => async (dispatch) => {
    dispatch({ type: REMOVE_FROM_CART, payload: { productId: _id }});
};
