
import React from 'react';
import './Login.css';
import {ModalContext} from "../context/modalContext";

function Login() {
    let { handleModal } = React.useContext(ModalContext);
    return (
        <form className="modal-content animate" method="post">
            <div className="row top title-container">
                <h3>Vendor Login</h3>
                <div onClick={() => handleModal('')} className="close-login">&times;</div>
            </div>
            <div className="imgcontainer">
                <img src={`${process.env.PUBLIC_URL}/images/avatar.jpg`} alt="Avatar" className="avatar" />
            </div>

            <div className="container">
                <label htmlFor="uname" className="login-label">Username:</label>
                <input type="text" placeholder="Enter Username" name="uname" required />
                <label htmlFor="psw" className="login-label">Password:</label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <button type="submit" className="primary">Login</button>
            </div>
        </form>
    );
}

export default Login;
