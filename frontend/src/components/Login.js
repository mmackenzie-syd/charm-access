
import React from 'react';
import './Login.css';
import {ModalContext} from "../context/modalContext";

function Login() {
    let { handleModal } = React.useContext(ModalContext);
    return (
        <form className="modal-content animate" method="post">
            <div className="imgcontainer">
                <span onClick={() => handleModal('')} className="close" title="Close Modal">&times;</span>
                <img src={`${process.env.PUBLIC_URL}/images/avatar.jpg`} alt="Avatar" className="avatar" />
            </div>

            <div className="container">
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <button type="submit" className="primary">Login</button>
            </div>
        </form>
    );
}

export default Login;
