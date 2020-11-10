import React, { Fragment } from 'react';
import './Footer.css';
import BagIcon from "../icons/BagIcon";
import PhoneIcon from "../icons/PhoneIcon";

function Footer() {
    return (
        <footer >
            <div className="row center footer__phone margin-bottom-2">
                <PhoneIcon width={'1.8rem'} height={'1.8rem'}  offset={'0.1rem'} fill={'#4f4f4f'} />
                &nbsp;+061421013777 &nbsp;&nbsp; 10AM - 8PM
            </div>
            <div className="row center">&copy; 2020 Charm Accessories &#8729; Built by Mark Mackenzie</div>
        </footer>
    );
}

export default Footer;
