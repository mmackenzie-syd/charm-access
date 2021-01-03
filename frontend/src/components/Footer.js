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
        <footer className="footer">
            <div className="social-media">
                <div className="row center social-media-phone">
                    <PhoneIcon width={'2.8rem'} height={'2.8rem'}  offset={'0.3rem'} />
                    <span>&nbsp;+061421013777 : 10AM - 8PM</span>
                </div>
                <div className="row center social-icons">
                    <div className="follow-us">Follow us</div>
                    <a className="social-icons-img-wrap" href="https://www.facebook.com/">
                        <img alt="facebook" className="img" src={`${process.env.PUBLIC_URL}/images/facebook.png`} />
                    </a>
                    <a className="social-icons-img-wrap" href="https://www.instagram.com/">
                        <img alt="instagram" className="img" src={`${process.env.PUBLIC_URL}/images/instagram.png`} />
                    </a>
                    <a className="social-icons-img-wrap" href="https://www.youtube.com/">
                        <img alt="youtube" className="img" src={`${process.env.PUBLIC_URL}/images/youtube.png`} />
                    </a>
                </div>
            </div>
            <div className="vendor footer-mobile">
                <div className="txt-center">&copy; 2020 Charm Accessories : Built by Mark Mackenzie</div>
            </div>
            <div className="footer-desktop">
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
            </div>
        </footer>
    );
}

export default Footer;
