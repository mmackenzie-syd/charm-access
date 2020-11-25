import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
} from "./cartConstants";

export const cartReducer = (state = {items: []}, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const newItem = action.payload;
            const items = state.items.filter(item => item._id !== newItem._id);
            return {
                ...state,
                items: [...items, newItem]
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
