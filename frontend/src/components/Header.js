import './Header.css';
import React, {Fragment, useContext, useState} from 'react'
import {NavLink, Link, useLocation} from "react-router-dom";
import {CategoriesContext} from "../providers/CategoriesProvider";
import BagIcon from "../icons/BagIcon";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import SearchIcon from "../icons/SearchIcon";

function Header(props) {
    const {categories} = useContext(CategoriesContext);
    const location = useLocation();
    const isShopActive = location.pathname.includes('collections') ? 'is-active' : '';

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
                        <li className="site__nav-item dropdown">
                            <div className="dropbtn">
                                <NavLink to="/collections/shop/1" className={isShopActive}>Shop</NavLink>
                            </div>
                            <div className="dropdown-content">
                                {
                                    categories && categories.map(category => (
                                        <NavLink
                                            key={category._id}
                                            to={`/collections/${category.slug}/1`}
                                        >
                                            {category.name}
                                        </NavLink>
                                    ))
                                }
                            </div>
                        </li>
                        <li className="site__nav-item"><NavLink to="/shipping" activeClassName='is-active'>SHIPPING & PAYMENT</NavLink></li>
                        <li className="site__nav-item"><NavLink to="/about" activeClassName='is-active'>ABOUT US</NavLink></li>

                        <li className="site__nav-item">
                            <a>
                                <BagIcon width={'1.1em'} height={'1.1em'} fill={'#111'} />
                            </a>
                        </li>
                        <li className="site__nav-item">
                            <a>
                                <SearchIcon width={'1em'} height={'1em'} />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
