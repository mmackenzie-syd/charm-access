import React, {useEffect, useState} from 'react';
import './Login.css';
import { ModalContext } from "../context/modalContext";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../state/userActions";
import { useHistory } from "react-router";

function Login() {
    let { handleModal } = React.useContext(ModalContext);
    let history = useHistory();

    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const userApi = useSelector(state => state.userApi);

    const { status, loading } = userApi;

    const submitHandler = (e) => {
        e.preventDefault(); // so that form does not refresh when we click submit
        dispatch(signin(username, password));
    }

    useEffect(() => {
        if (status === 'SUCCESS') {
            handleModal('');
            history.push('/dashboard/products/1');
        }
        if (status === 'RESET') {
            handleModal('');
            history.push('/dashboard/reset');
        }
    }, [status, handleModal, history]);

    return (
        <form className="modal-content animate" onSubmit={submitHandler}>
            {
                loading &&
                <div className="login-loading-icon">
                    <img alt="loading" className="loading-img" src={`${process.env.PUBLIC_URL}/images/loading.gif`} />
                </div>
            }
            <div className="padding-top-2 padding-left-3 padding-right-3 padding-bottom-3">
                <h3>Vendor Login</h3>
                <hr className="margin-top-2"/>
                <div onClick={() => handleModal('')} className="close-modal">&times;</div>
                <label htmlFor="uname" className="login-label">Username:</label>
                <input
                    type="text"
                    placeholder="Enter Username"
                    name="uname"
                    required
                    onChange={e => setUsername(e.target.value)}
                />
                <label htmlFor="psw" className="login-label">Password:</label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    required
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit" className="btn btn-primary full-width">Login</button>
            </div>
        </form>
    );
}

export default Login;
