import './Header.css';
import React, {Fragment} from 'react'
import {useSelector} from "react-redux";
import {NavLink, Link} from "react-router-dom";

function Header() {
    const categoryList = useSelector(state => state.categoryList);
    const { categories } = categoryList;
    return (
        <div className="sticky">
            <header className="site row space-between">
                <div className="site__title">
                    <Link to="/">
                        <img src="../../images/brand.png"/>
                    </Link>
                </div>
                <nav className="site__nav">
                    <ul className="row right">
                        <li className="site__nav-item"><NavLink to="/" activeClassName='is-active' exact>HOME</NavLink></li>
                        <li className="site__nav-item"><NavLink to="/collections/jewellery/1" activeClassName='is-active'>SHOP</NavLink></li>
                        <li className="site__nav-item"><NavLink to="/shipping" activeClassName='is-active'>SHIPPING & PAYMENT</NavLink></li>
                        <li className="site__nav-item"><NavLink to="/about" activeClassName='is-active'>ABOUT US</NavLink></li>

                        <li className="site__nav-item">
                            <a>
                                <span className="gp-icon shopping-bag">
                                    <svg
                                        width="1.1em"
                                        height="1.1em"
                                        viewBox="25 25 47 47"
                                        xmlSpace="preserve"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <path d="M59.4,72.1H40.7c-4.1,0-7-2.6-7.1-6.1l-2.5-27c0-0.1,0-0.1,0-0.2c0-1.5,1.2-2.7,2.9-2.7h32.3c1.5,0,2.8,1.3,2.8,2.9  c0,0.1,0,0.1,0,0.2l-2.5,26.7C66.4,69.4,63.4,72.1,59.4,72.1z M35.1,40.1l2.4,25.6c0,0.1,0,0.1,0,0.2c0,1.5,1.6,2.2,3.1,2.2h18.7  c1.5,0,3.1-0.7,3.1-2.3c0-0.1,0-0.1,0-0.2l2.4-25.5H35.1z"/>
                                            <path d="M58.4,40.1c-1.1,0-2-0.9-2-2v-2.6c0-3.8-2.6-6.7-6-6.7s-6,2.9-6,6.7v2.6c0,1.1-0.9,2-2,2s-2-0.9-2-2v-2.6  c0-6,4.4-10.7,10-10.7s10,4.7,10,10.7v2.6C60.4,39.2,59.5,40.1,58.4,40.1z"/>
                                    </svg>
                                </span>
                            </a>
                        </li>
                        <li className="site__nav-item">
                            <a>
                                <span className="gp-icon icon-search">
                                    <svg
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 512 512"
                                        ariaHidden="true"
                                        role="img"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M208 48c-88.366 0-160 71.634-160 160s71.634 160 160 160 160-71.634 160-160S296.366 48 208 48zM0 208C0 93.125 93.125 0 208 0s208 93.125 208 208c0 48.741-16.765 93.566-44.843 129.024l133.826 134.018c9.366 9.379 9.355 24.575-.025 33.941-9.379 9.366-24.575 9.355-33.941-.025L337.238 370.987C301.747 399.167 256.839 416 208 416 93.125 416 0 322.875 0 208z"></path>
                                    </svg>
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
