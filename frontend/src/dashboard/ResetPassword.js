import React, {useEffect, useState} from 'react';
import './ResetPassword.css';
import {useDispatch, useSelector} from "react-redux";
import {reset, signin} from "../state/userActions";

function ResetPassword(props) {

    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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