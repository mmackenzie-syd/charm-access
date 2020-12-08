import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {
    bycategoryReducer,
    categoriesReducer,
    productReducer,
    productsReducer,
    arrivalsReducer,
} from "./apiReducers";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";

const initialState = {
};

const reducer = combineReducers({
    productApi: productReducer,
    productsApi: productsReducer,
    categoriesApi: categoriesReducer,
    cart: cartReducer,
    bycategoryApi: bycategoryReducer,
    arrivalsApi: arrivalsReducer,
    userApi: userReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
