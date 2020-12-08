import {
    USER_FAIL,
    USER_REQUEST,
    USER_SUCCESS,
    USER_REMOVE,
} from "./userConstants";

import Axios from "axios";

export const signin = (email, password) => async(dispatch) => {
    // dispatch({ type:     USER_REQUEST,, payload: { email, password }});
    // try {
    //    const { data } = await Axios.post('/api/users/signin', {email, password });
        const data = { name: 'mark' };
        dispatch({type: USER_SUCCESS, payload: data});
        localStorage.setItem('user', JSON.stringify(data));
    // } catch(error) {
    //     dispatch({ type: USER_SIGNIN_FAIL,
    //         payload: error.response && error.response.data.message
    //             ? error.response.data.message
    //             : error.message,
    //     })
    // }
}

export const signout = () => async(dispatch) => {
    localStorage.removeItem('user');
    dispatch({ type: USER_REMOVE });
}
