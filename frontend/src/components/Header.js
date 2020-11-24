import './Header.css';
import React from 'react'
import {NavLink, Link, useLocation} from "react-router-dom";
import SearchIcon from "../icons/SearchIcon";
import CartIcon from "../icons/CartIcon";
import CartIconPurple from "../icons/CartIconPurple";
import {useSelector} from "react-redux";

function Header() {
    const categoriesApi = useSelector(state => state.categoriesApi);
    const { data } = categoriesApi;
    const categories = data ? data.filter(category => category.slug !== 'shop') : [];
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
                                <NavLink to="/products/shop/1" className={isShopActive}>Shop</NavLink>
                            </div>
                            <div className="dropdown-content">
                                {
                                    categories && categories.map(category => (
                                        <NavLink
                                            key={category._id}
                                            to={`/products/${category.slug}/1`}
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
                </div>
                <div className="row right" style={{marginRight: '-.5rem'}}>
                    <div className="site__nav-item" style={{paddingRight: 0}}>
                        <NavLink to="/cart" activeClassName='is-active'>
                            <div className="search-containers">
                                <SearchIcon
                                    className={"cartInactive"}
                                    width={'2.6rem'}
                                    height={'2.6rem'}
                                    offset={'.4rem'}
                                />
                            </div>
                        </NavLink>
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
