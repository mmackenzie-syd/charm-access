import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import throttle from 'lodash.throttle';

// persisted state
// https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e

import {
    bycategoryReducer,
    categoriesReducer,
    productsReducer,
    arrivalsReducer,
} from "./apiReducers";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";
import {loadState} from "./loadState";
import {saveState} from "./saveState";


const initialState = {
};

const reducer = combineReducers({
    productsApi: productsReducer,
    categoriesApi: categoriesReducer,
    cart: cartReducer,
    bycategoryApi: bycategoryReducer,
    arrivalsApi: arrivalsReducer,
    userApi: userReducer
});

const persistedState = loadState();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    persistedState,
    composeEnhancer(applyMiddleware(thunk))
);

store.subscribe(throttle(() => {
    saveState({
        productsApi: store.getState().productsApi,
        categoriesApi: store.getState().categoriesApi,
    });
}, 1000));


export default store;
