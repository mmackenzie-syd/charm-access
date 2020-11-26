import './Header.css';
import React from 'react'
import {NavLink, Link, useLocation} from "react-router-dom";
import SearchIcon from "../icons/SearchIcon";
import CartIcon from "../icons/CartIcon";
import {useSelector} from "react-redux";
import Search from "./Search";
import {ModalContext} from "../context/modalContext";

function Header() {
    let { handleModal } = React.useContext(ModalContext);
    const categoriesApi = useSelector(state => state.categoriesApi);
    const { data } = categoriesApi;
    const categories = data ? data.filter(category => category.slug !== 'shop') : [];
    const location = useLocation();
    const isShopActive = location.pathname.includes('collections') ? 'is-active' : '';

    const cart = useSelector(state => state.cart);
    const { addedIds, quantityById } = cart;
    let totalItems = 0;
    if (addedIds) {
        totalItems = addedIds.reduce((acc, id) => {
            acc = quantityById[id] + acc;
            return acc;
        }, 0);
    }

    return (
        <div className="sticky">
            <header className="site row">
                <div className="row left">
                    <div className="site__title">
                        <Link to="/">
                            <img alt="brand" src="../../images/brand.png"/>
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
                    <div className="site__nav-item search-icon-container">
                        <button className="login-btn" onClick={() => handleModal(<Search />)}>
                            <SearchIcon
                                className={"search-icon"}
                                width={'2.6rem'}
                                height={'2.6rem'}
                                offset={'.4rem'}
                            />
                        </button>
                    </div>
                    <div className="site__nav-item cart-icon-container">
                        <NavLink to="/cart" activeClassName='is-active'>
                            { addedIds && (addedIds.length !== 0) &&
                                <div className="qty">{totalItems}</div>
                            }
                            <CartIcon
                                className={"cart-icon"}
                                width={'3.2rem'}
                                height={'3.2rem'}
                                offset={'-.1rem'}
                            />
                        </NavLink>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
