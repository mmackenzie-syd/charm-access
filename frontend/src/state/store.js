import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import throttle from 'lodash.throttle';
import {
    categoriesReducer,
    productsReducer,
    categorySlidesReducer,
    arrivalSlidesReducer,
    searchReducer
} from "./apiReducers";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";
import {loadState} from "./loadState";
import {saveState} from "./saveState";


const reducer = combineReducers({
    productsApi: productsReducer,
    categoriesApi: categoriesReducer,
    cart: cartReducer,
    categorySlidesApi: categorySlidesReducer,
    arrivalSlidesApi: arrivalSlidesReducer,
    userApi: userReducer,
    searchApi: searchReducer
});

const persistedState = loadState();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    persistedState,
    composeEnhancer(applyMiddleware(thunk))
);


// persisted state
// https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e

store.subscribe(throttle(() => {
    // persist data only and not errors!
    const state = store.getState();
    saveState({
        arrivalSlidesApi: { data: state.arrivalSlidesApi.data },
        productsApi: { data: state.productsApi.data },
        categoriesApi: { data: state.categoriesApi.data },
        userApi: { status: state.userApi.status },
    });
}, 1000));


export default store;
