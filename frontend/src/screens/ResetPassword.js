import React, {useEffect, useState} from 'react';
import './ResetPassword.css';
import {useDispatch, useSelector} from "react-redux";
import {reset} from "../state/userActions";
import {useHistory} from "react-router";

function ResetPassword(props) {
    let history = useHistory();
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.userApi);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if (status === 'SUCCESS') {
            history.push('/dashboard/products/1');
        }
    }, [status, history]);

    const submitHandler = (e) => {
        e.preventDefault(); // so that form does not refresh when we click submit
        if (password !== confirmPassword) {
            return;
        }
        dispatch(reset(password));
    }

    return (
        <form className="reset" onSubmit={submitHandler}>
            <div className="row top title-container">
                <h3>Change Password</h3>
            </div>
            <div className="container">
                <label htmlFor="psw" className="login-label">New Password:</label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    required
                    onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor="confirm" className="login-label">Confirm Password:</label>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirm"
                    required
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <button type="submit" className="primary">Save</button>
            </div>
        </form>);
}

export default ResetPassword;
