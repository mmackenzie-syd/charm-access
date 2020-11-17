import './Header.css';
import React, {Fragment, useContext, useState} from 'react'
import {NavLink, Link, useLocation} from "react-router-dom";
import {CategoriesContext} from "../providers/CategoriesProvider";
import SearchIcon from "../icons/SearchIcon";
import CartIcon from "../icons/CartIcon";
import CartIconPurple from "../icons/CartIconPurple";

function Header() {
    const {categories, callback, count} = useContext(CategoriesContext);
    const location = useLocation();
    const isShopActive = location.pathname.includes('collections') ? 'is-active' : '';

    return (
        <div className="sticky">
            <header className="site row">
                <div className="row left">
                    <div className="site__title">
                        <Link to="/">
                            <img src="../../images/brand.png"/>
                        </Link>
                    </div>
                    <ul className="row site__nav">
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
                    </ul>
                    <div>
                        <button onClick={callback} style={{width: '120px'}}>+</button>
                        {count}
                    </div>
                </div>
                <div className="row right">
                    <div className="search-container">
                        <form>
                            <input type="text" placeholder="Search..." name="search" />
                            <button type="submit">
                                <SearchIcon
                                    width={'1.5rem'}
                                    height={'1.5rem'}
                                    offset={'.1rem'}
                                    fill={'#4f4f4f'}
                                />
                            </button>
                        </form>
                    </div>
                    <div className="site__nav-item">

                        <NavLink to="/cart" activeClassName='is-active'>
                            <div className="cart-container">
                                <CartIcon
                                    className={"cartInactive"}
                                    width={'3.2rem'}
                                    height={'3.2rem'}
                                    offset={'-.1rem'}
                                />
                                <CartIconPurple
                                    className={"cartActive"}
                                    width={'3.2rem'}
                                    height={'3.2rem'}
                                    offset={'-.1rem'}
                                />
                            </div>
                        </NavLink>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
