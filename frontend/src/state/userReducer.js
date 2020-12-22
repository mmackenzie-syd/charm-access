import {
    USER_FAIL,
    USER_REQUEST,
    USER_STATUS,
    USER_REMOVE,
} from "./userConstants";

export const userReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_REQUEST:
            return {...state, loading: true}
        case USER_STATUS:
            return {...state, loading: false, status: action.payload }
        case USER_FAIL:
            return {...state, loading: false, error: action.payload }
        case USER_REMOVE:
            return {};
        default:
            return state;
    }
}
