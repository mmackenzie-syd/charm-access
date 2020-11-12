import React from 'react';
import './Footer.css';
import PhoneIcon from "../icons/PhoneIcon";

function Footer() {
    return (
        <footer >
            <div className="margin-bottom-3 social-media">
                <div className="row center footer__phone  margin-bottom-3">
                    <PhoneIcon width={'2.8rem'} height={'2.8rem'}  offset={'0.3rem'} fill={'#4f4f4f'} />
                    <span>&nbsp;+061421013777 &nbsp;&nbsp; 10AM - 8PM</span>
                </div>
                <div className="row center social-icons">
                    <div className="follow-us">Follow us</div>
                    <div className="social-icons__img-wrap">
                        <img className="social-icons__img" src={`${process.env.PUBLIC_URL}/images/facebook.png`} />
                    </div>
                    <div className="social-icons__img-wrap">
                        <img className="social-icons__img" src={`${process.env.PUBLIC_URL}/images/instagram.png`} />
                    </div>
                    <div className="social-icons__img-wrap">
                        <img className="social-icons__img" src={`${process.env.PUBLIC_URL}/images/youtube.png`} />
                    </div>
                </div>

            </div>
            <div className="row center">&copy; 2020 Charm Accessories &#8729; Built by Mark Mackenzie</div>
        </footer>
    );
}

export default Footer;
