import {
    USER_REQUEST,
    USER_STATUS,
    USER_REMOVE,
} from "./userConstants";

import AWS_WRAPPER from '../services/AWS_WRAPPER';
const { UserService } = AWS_WRAPPER;

export const signin = (email, password) => async(dispatch) => {
    dispatch({type: USER_REQUEST});
    try {
        const status = await UserService.signin(email, password);
        dispatch({type: USER_STATUS, payload: status});
    }
    catch (err) {
        alert(err.message || JSON.stringify(err));
    }
}

export const reset = (password) => async(dispatch) => {
    dispatch({type: USER_REQUEST});
    try {
        const status = UserService.reset(password);
        dispatch({type: USER_STATUS, payload: status});
    }
    catch (err) {
        alert(err.message || JSON.stringify(err));
    }
}

export const signout = () => async(dispatch) => {
    dispatch({ type: USER_REMOVE });
    UserService.signout();
}
