import React, { Fragment } from 'react';
import './Footer.css';

function Footer() {
    return (
        <Fragment>
            <section className="footer margin-top-5">
                <div className="footer__grid">
                    <div className="footer__grid-item footer__border">
                        <div className="footer__img-container" > <img  className="footer__img" src="./images/orders.png"/></div>
                        <div className="footer__title">Order Online</div>
                        <div className="footer__txt">Order online through our website. If you need any assistance, please do not hesitate to call.</div>
                    </div>
                    <div className="footer__grid-item footer__border">
                        <div className="footer__img-container" > <img  className="footer__img" src="./images/shipping.png"/></div>
                        <div className="footer__title">Deliveries</div>
                        <div className="footer__txt">Free Shipping on orders over $100. Deliveries through Australia Post, Australia wide.</div>
                    </div>
                    <div className="footer__grid-item">
                        <div className="footer__img-container"><img className="footer__img" src="./images/return.png"/></div>
                        <div className="footer__title">Returns</div>
                        <div className="footer__txt">We want yoo to love your purchase! But if you are not happy we offer a 30 days change of mind policy.</div>
                    </div>
                </div>
            </section>
            <nav className="bottom-nav padding-top-4">
                <ul className="row center">
                    <li className="bottom-nav-item"><a href="/shipping">Shipping & Payment</a></li>
                    <li className="bottom-nav-item"><a href="/about">About Us</a></li>
                    <li className="bottom-nav-item"><a href="/about">Contacts</a></li>
                    <li className="bottom-nav-item"><a href="/collections">All goods</a></li>
                </ul>
            </nav>
            <footer className="row center">
                <div>Copyright &copy; Mark Mackenzie 2020 for Charm Accessories</div>
            </footer>
        </Fragment>
    );
}

export default Footer;
