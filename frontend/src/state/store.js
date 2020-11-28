import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {
    bycategoryReducer,
    categoriesReducer,
    productReducer,
    productsReducer,
    arrivalsReducer,
    vendorProductReducer,
    vendorProductsReducer,
} from "./apiReducers";
import { cartReducer } from "./cartReducer";

const initialState = {
};

const reducer = combineReducers({
    productApi: productReducer,
    productsApi: productsReducer,
    categoriesApi: categoriesReducer,
    cart: cartReducer,
    bycategoryApi: bycategoryReducer,
    arrivalsApi: arrivalsReducer,
    productVendor: vendorProductReducer,
    productsVendor: vendorProductsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
