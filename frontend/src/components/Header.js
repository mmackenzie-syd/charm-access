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
    const { status } = useSelector(state => state.userApi);

    const showDashboard = (status === 'SUCCESS');

    return (
        <div className="sticky">
            <header className="header row space-between">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/">
                            <img alt="brand" className="header-img" src={`${process.env.PUBLIC_URL}/images/brand.png`}/>
                        </Link>
                    </li>
                    {
                        !showDashboard &&
                        <>
                            <li className="nav-item nav-item-dropdown">
                                <div className="nav-item-dropbtn">
                                    <NavLink to="/products/shop/1" className={isShopActive}>SHOP</NavLink>
                                </div>
                                <div className="nav-item-dropdown-content">
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
                            <li className="nav-item"><NavLink to="/shipping" activeClassName='is-active'>SHIPPING & PAYMENT</NavLink></li>
                            <li className="nav-item"><NavLink to="/about" activeClassName='is-active'>ABOUT US</NavLink></li>
                        </>
                    }
                    {
                        showDashboard &&
                        <>
                            <li className="site__nav-item">
                                <NavLink to="/dashboard/products/1" activeClassName='is-active'>PRODUCTS</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/categories" activeClassName='is-active'>CATEGORIES</NavLink>
                            </li>
                        </>
                    }
                </ul>
            <ul className="nav">
                <li className="nav-item srch-icon-wrap" onClick={() => handleModal(<Search />)}>
                    <SearchIcon
                        className={"srch-icon"}
                        width={'2.6rem'}
                        height={'2.6rem'}
                    />
                </li>
                <li className="nav-item crt-icon-wrap">
                    <NavLink to="/cart" activeClassName='is-active'>
                        { addedIds && (addedIds.length !== 0) &&
                            <div className="qty">{totalItems}</div>
                        }
                        <CartIcon
                            className={"crt-icon"}
                            width={'3.2rem'}
                            height={'3.2rem'}
                            offset={'-.1rem'}
                        />
                    </NavLink>
                </li>
            </ul>
        </header>
        </div>
    );
}

export default Header;
