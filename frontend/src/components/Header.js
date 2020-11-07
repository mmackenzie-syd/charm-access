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
                        <li className="site__nav-item"><NavLink to="/" activeClassName='is-active'>HOME</NavLink></li>
                        <li className="site__nav-item"><NavLink to="/collections/jewellery/1">SHOP</NavLink></li>
                        <li className="site__nav-item"><NavLink to="/collections/jewellery/1">SHIPPING & PAYMENT</NavLink></li>
                        <li className="site__nav-item"><NavLink to="/about">ABOUT US</NavLink></li>
                        <li className="site__nav-item">
                            <NavLink to="/shipping">
                                <span className="gp-icon shopping-bag">
                                    <svg viewBox="0 0 518 512" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                         width="1em" height="1em">
                                        <g id="Union" transform="matrix(1,0,0,1,2.01969,2)">
                                            <path
                                                d="M172,108.5C172,61.832 209.832,24 256.5,24C303.168,24 341,61.832 341,108.5L341,116C341,122.627 346.373,128 353,128C359.628,128 365,122.627 365,116L365,108.5C365,48.577 316.423,0 256.5,0C196.577,0 148,48.577 148,108.5L148,116C148,122.627 153.373,128 160,128C166.628,128 172,122.627 172,116L172,108.5Z"
                                                style={{fillRule: 'nonzero'}}></path>
                                            <path
                                                d="M4.162,145.236C7.195,141.901 11.493,140 16,140L496,140C500.507,140 504.806,141.901 507.838,145.236C510.87,148.571 512.355,153.03 511.928,157.517L482.687,464.551C480.34,489.186 459.65,508 434.903,508L77.097,508C52.35,508 31.66,489.186 29.314,464.551L0.072,157.517C-0.355,153.03 1.13,148.571 4.162,145.236Z"
                                                style={{fillRule: 'nonzero'}}></path>
                                        </g>
                                    </svg>
                                </span>
                            </NavLink>
                        </li>
                        <li className="site__nav-item">
                            <NavLink to="/shipping">
                                <span className="gp-icon icon-search">
                                    <svg viewBox="0 0 512 512"
                                         ariaHidden="true"
                                         role="img"
                                         version="1.1"
                                         xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="1em" height="1em">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M208 48c-88.366 0-160 71.634-160 160s71.634 160 160 160 160-71.634 160-160S296.366 48 208 48zM0 208C0 93.125 93.125 0 208 0s208 93.125 208 208c0 48.741-16.765 93.566-44.843 129.024l133.826 134.018c9.366 9.379 9.355 24.575-.025 33.941-9.379 9.366-24.575 9.355-33.941-.025L337.238 370.987C301.747 399.167 256.839 416 208 416 93.125 416 0 322.875 0 208z"></path>
                                    </svg>
                                </span>
                            </NavLink>
                        </li>
                        <li className="site__nav-item">
                            <NavLink to="/shipping">
                                <span className="gp-icon pro-menu-bars">
                                    <svg viewBox="0 0 512 512" ariaHidden="true" role="img" version="1.1"
                                         xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1em"
                                         height="1em">
                                        <path
                                            d="M0 96c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24z"></path>
                                    </svg>
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
