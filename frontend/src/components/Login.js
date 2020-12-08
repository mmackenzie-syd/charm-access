import React, {useState} from 'react';
import './Login.css';
import { ModalContext } from "../context/modalContext";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../state/userActions";

function Login() {
    let { handleModal } = React.useContext(ModalContext);

    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const userApi = useSelector(state => state.userApi);

    const { name } = userApi;

    const submitHandler = (e) => {
        e.preventDefault(); // so that form does not refresh when we click submit
        dispatch(signin(username, password));
        handleModal('');
    }

    // useEffect(() => {
    //     if (userInfo) {
    //         props.history.push(redirect);
    //     }
    // }, [userInfo, props.history, redirect]);

    return (
        <form className="modal-content animate" onSubmit={submitHandler}>
            <div className="row top title-container">
                <h3>Vendor Login</h3>
                <div onClick={() => handleModal('')} className="close-login">&times;</div>
            </div>
            <div className="container">
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
                <button type="submit" className="primary">Login</button>
            </div>
        </form>
    );
}

export default Login;
