import {
    USER_FAIL,
    USER_REQUEST,
    USER_SUCCESS,
    USER_REMOVE,
} from "./userConstants";

export const userReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_REQUEST:
            return {loading: true}
        case USER_SUCCESS:
            return {loading: false, name: action.payload}
        case USER_FAIL:
            return {loading: false, error: action.payload}
        case USER_REMOVE:
            return {};
        default:
            return state;
    }
}
