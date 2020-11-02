import React, { Fragment } from 'react';
import './Footer.css';

function Footer() {
    return (
        <Fragment>
            <nav className="bottom-nav margin-top-4">
                <ul className="row">
                    <li><a href="/shipping">Shipping & Payment</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/about">Contacts</a></li>
                    <li><a href="/collections">All goods</a></li>
                </ul>
            </nav>
            <footer className="row">
                <div>Copyright &copy; Mark Mackenzie 2020 for Charm Accessories</div>
                <div>privacy policy</div>
            </footer>
        </Fragment>
    );
}

export default Footer;
