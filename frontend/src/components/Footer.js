import React from 'react';
import './Footer.css';
import PhoneIcon from "../icons/PhoneIcon";
import LoginIcon from "../icons/LoginIcon";
import {ModalContext} from "../context/modalContext";
import Login from "./Login";
import LogoutIcon from "../icons/LogoutIcon";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../state/userActions";
import {useHistory} from "react-router";
import {getCategoriesState} from "../state/apiActions";

function Footer() {
    const history = useHistory();
    const dispatch = useDispatch();
    let { handleModal } = React.useContext(ModalContext);
    const { status } = useSelector(state => state.userApi);
    const handleLogout = () => {
        dispatch(signout());
        dispatch(getCategoriesState());
        history.push('/');
    }

    return (
        <footer >
            <div className="margin-bottom-3 social-media">
                <div className="row center footer__phone  margin-bottom-3">
                    <PhoneIcon width={'2.8rem'} height={'2.8rem'}  offset={'0.3rem'} />
                    <span>&nbsp;+061421013777 &nbsp;&nbsp; 10AM - 8PM</span>
                </div>
                <div className="row center social-icons">
                    <div className="follow-us">Follow us</div>
                    <div className="social-icons__img-wrap">
                        <img alt="facebook" className="social-icons__img" src={`${process.env.PUBLIC_URL}/images/facebook.png`} />
                    </div>
                    <div className="social-icons__img-wrap">
                        <img alt="instagram" className="social-icons__img" src={`${process.env.PUBLIC_URL}/images/instagram.png`} />
                    </div>
                    <div className="social-icons__img-wrap">
                        <img alt="youtube" className="social-icons__img" src={`${process.env.PUBLIC_URL}/images/youtube.png`} />
                    </div>
                </div>
            </div>
            <div className="row center vendor">
                <div>&copy; 2020 Charm Accessories - Built by Mark Mackenzie - Vendor { status ? 'Logout' : 'Login'} </div>
                <div className="vendor-login-wrap">
                    {
                        status
                            ? <button className="login-btn" onClick={() => handleLogout()}>
                                <LogoutIcon width={'2.8rem'} height={'2.8rem'} />
                              </button>
                            : <button className="login-btn" onClick={() => handleModal(<Login />)}>
                                <LoginIcon width={'2.8rem'} height={'2.8rem'} />
                              </button>
                    }
                </div>
            </div>
        </footer>
    );
}

export default Footer;
