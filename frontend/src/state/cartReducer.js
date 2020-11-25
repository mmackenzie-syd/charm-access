import {
    ADD_TO_CART,
    REMOVE_FROM_CART, UPDATE_CART_QTY,
} from "./cartConstants";

export const cartReducer = (state = {items: []}, action) => {
    switch(action.type) {
        case UPDATE_CART_QTY: {
            const { _id, qty } = action.payload;
            const existItem = state.items.find(item => item._id === _id);
            if (existItem) {
                existItem.qty = qty;
                return {
                    ...state,
                    items: state.items.map(
                        item => item._id === _id ? existItem : item
                    ),
                }
            }
            return state;
        }
        case ADD_TO_CART: {
            const newItem = action.payload;
            const existItem = state.items.find(item => item._id === newItem._id);
            if (existItem) {
                existItem.qty = existItem.qty + newItem.qty;
                return {
                    ...state,
                    items: state.items.map(
                        item => item._id === existItem._id ? existItem : item
                    ),
                }
            } else {
                return {...state, items: [...state.items, newItem]}
            }
        }
        case REMOVE_FROM_CART:
            const _id = action.payload;
            return {
                ...state,
                items: state.items.filter(item => item._id !== _id)
            }
        default:
            return state;
    }
}
