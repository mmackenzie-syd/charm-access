import {
    USER_FAIL,
    USER_REQUEST,
    USER_SUCCESS,
    USER_REMOVE,
    USER_RESET,
} from "./userConstants";

export const userReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_REQUEST:
            return {...state, loading: true}
        case USER_SUCCESS:
            return {...state, loading: false, name: action.payload, reset: false}
        case USER_FAIL:
            return {...state, loading: false, error: action.payload}
        case USER_RESET:
            return {...state, loading: false, reset: true, name: action.payload}
        case USER_REMOVE:
            return {};
        default:
            return state;
    }
}
