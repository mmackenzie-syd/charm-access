import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART,
} from "./cartConstants";

const initialState = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : {
        addedIds: [],
        quantityById: {},
        productById: {}
    };

const addedIds = (state = initialState.addedIds, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const { productId } = action.payload;
            if (state.indexOf(productId) !== -1) {
                return state
            }
            return [ ...state, productId ];
        case REMOVE_FROM_CART: {
            const { productId } = action.payload;
            return state.filter(id => id !== productId);
        }
        default:
            return state
    }
}

const quantityById = (state = initialState.quantityById, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const { productId, qty } = action.payload;
            return {
                ...state,
                [productId]: (state[productId] || 0) + qty
            }
        }
        case UPDATE_CART: {
            const { productId, qty } = action.payload;
            return {
                ...state,
                [productId]: qty
            }
        }
        case REMOVE_FROM_CART: {
            const { productId } = action.payload;
            const filteredState = {...state};
            delete filteredState[productId];
            return filteredState;
        }
        default:
            return state
    }
}

const productById = (state = initialState.productById, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const { product, productId } = action.payload;
            return { ...state, [productId]: product }
        case REMOVE_FROM_CART: {
            const { productId } = action.payload;
            const filteredState = {...state};
            delete filteredState[productId];
            return filteredState;
        }
        default:
            return state
    }
}

export const cartReducer = (state = initialState, action) => {
    const newState = {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
        productById: productById(state.productById, action),
    }
    localStorage.setItem('cart', JSON.stringify(newState));
    return newState;
}

