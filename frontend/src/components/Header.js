import './Header.css';
import React from 'react'
import {NavLink, Link, useLocation} from "react-router-dom";
import SearchIcon from "../icons/SearchIcon";
import CartIcon from "../icons/CartIcon";
import {useSelector} from "react-redux";
import Search from "./Search";
import {ModalContext} from "../context/modalContext";
import DownArrowIcon from "../icons/DownArrowIcon";

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

    const openNav = (e) => {
        e.preventDefault();
        if (document.getElementById("mySidebar") !== null ) {
            document.getElementById("mySidebar").style.width = "250px";
        }

    }

    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    const closeNav = (e) => {
        e.preventDefault();
        if (document.getElementById("mySidebar") !== null) {
            document.getElementById("mySidebar").style.width = "0";
        }
    }

    const closeDropdown = (e) => {
        e.preventDefault();
        if (document.getElementsByClassName("dropdown-container") !== null) {
            const dropdownContent = document.getElementsByClassName("dropdown-container");
            if (dropdownContent[0].style.display === "block") {
                dropdownContent[0].style.display = "none";
            } else {
                dropdownContent[0].style.display = "block";
            }
        }
    }

    const myFunction = (e) => {
        e.preventDefault();
        if (document.getElementById("myDropdown") !== null) {
            document.getElementById("myDropdown").classList.toggle("show");
        }
    }

    const handleMobileNav = () => {
        if (document.getElementById("mySidebar") !== null) {
            document.getElementById("mySidebar").style.width = "0";
        }
        if (document.getElementById("myDropdown") !== null) {
            document.getElementById("myDropdown").classList.toggle("show");
        }
    }

    return (
        <>
            <div className="sticky header-mobile">
            <header className="header row space-between">
                <div id="mySidebar" className="sidebar">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                    <div className="">
                        <div className="dropdown">
                            <div style={{width: '400px'}}>
                                <NavLink
                                    to="/products/shop/1"
                                    className={isShopActive}
                                    className={"sidebar-li-dropdown"}
                                    onClick={handleMobileNav}
                                >
                                    SHOP
                                </NavLink>
                                <div onClick={myFunction} className="dropbtn">
                                    <DownArrowIcon
                                        className={'dropdown-arrow'}
                                        offset={'.4rem'}
                                    />
                                </div>
                            </div>
                            <div id="myDropdown" className="dropdown-content">
                                {
                                    categories && categories.map(category => (
                                        <NavLink
                                            key={category._id}
                                            to={`/products/${category.slug}/1`}
                                            onClick={handleMobileNav}
                                        >
                                            {category.name}
                                        </NavLink>
                                    ))
                                }
                            </div>
                        </div>
                        <NavLink
                            to="/shipping"
                            activeClassName='is-active'
                            className="sidebar-li"
                            onClick={handleMobileNav}
                        >
                            Shipping & Payment
                        </NavLink>
                        <NavLink
                            to="/about"
                            activeClassName='is-active'
                            className="sidebar-li"
                            onClick={handleMobileNav}
                        >
                            About Us
                        </NavLink>
                    </div>
                </div>
                <ul className="nav">
                    <button className="openbtn" onClick={openNav}>&#9776;</button>
                </ul>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/">
                            <img alt="brand" className="header-img" src={`${process.env.PUBLIC_URL}/images/brand.png`}/>
                        </Link>
                    </li>
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
        <div className="sticky header-desktop">
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
        </>
    );
}

export default Header;
