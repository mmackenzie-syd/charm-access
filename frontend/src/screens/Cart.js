import React from 'react';
import { Link } from "react-router-dom";
import './Cart.css';
import Quantity from "../components/Quantity";
import Breadcrumb from "../components/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import {addToCart, removeFromCart} from "../state/cartActions";
import Message from "../components/Message";

function Cart() {
    const dispatch = useDispatch();
    const onPlusBtn = (item) => {
        const qty = item.qty + 1;
        dispatch(addToCart({...item, qty}));
    }

    const onSubBtn = (item) => {
        const qty = item.qty - 1;
        if (qty > 0) {
            dispatch(addToCart({...item, qty}));
        }
    }

    const handleDelete = (id) => {
        dispatch(removeFromCart(id));
    }

    const cart = useSelector(state => state.cart);
    const { items } = cart;
    let total = 0;
    if (items) {
        total = items.reduce((acc, item) => {
            acc = item.qty * Number(item.price) + acc;
            return acc;
        }, 0);
    }

    return (
        <main className="cart margin-top-3">
            <section className="row margin-top-1">
                <Breadcrumb
                    list={[{name: 'Home Page', url: '/'}, {name: 'Cart', url: ''}]}
                    show={true}
                />
                <div>&crarr; <span className="cart__continue">Continue Shopping</span> </div>
            </section>
            <section className="row margin-top-5 ">
                <h3 className="margin-bottom-3">Basket</h3>
            </section>
            <div className="row">
                <section className="table">
                    {items && (items.length !== 0) &&
                        <div className="row table__heading">
                            <div className="col-2 padding-right-3">Product</div>
                            <div className="col-4">Description</div>
                            <div className="col-2">Price</div>
                            <div className="col-2 row">Quantity</div>
                            <div className="col-2 row right">Sub-total</div>
                        </div>
                    }
                    { items && (items.length === 0) &&
                        <div>
                            Your Cart is empty.
                        </div>
                    }
                    { items && items.map( (item) => {
                        const { name, price, qty } = item;
                        const subTotal = qty * Number(price);
                        return <div className="row top table__item">
                                <div className="col-2 padding-right-3">
                                    <div className="table__img">
                                        <img alt={name} src={item.image}/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <p className="table__p"><span className="">{name}</span></p>
                                    <div className="table-delete-container">
                                        <div className="table-delete" onClick={() => handleDelete(item._id)}>
                                            <span className="table-delete-cross">&#10005;</span> <span
                                            className="delete">Delete</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 text-center">
                                    <p className="table__p">${price}</p>
                                </div>
                                <div className="col-2">
                                    <div className="row">
                                        <Quantity
                                            value={qty}
                                            onSubBtn={() => onSubBtn(item)}
                                            onPlusBtn={() => onPlusBtn(item)}
                                        />
                                    </div>
                                </div>
                                <div className="col-2 row right">
                                    <p className="table__p">${subTotal}</p>
                                </div>
                            </div>;
                        })
                    }
                </section>
            </div>
            { items && items.length !== 0 &&
                <>
                    <section className="cart__total">
                        <h3 className="product__brand-title inline-block margin-right-2 margin-bottom-2 margin-top-1">Cart
                            total:</h3>
                        <h3 className="product__brand-title inline-block margin-bottom-2 margin-top-1">${total}</h3>
                    </section>
                        <section className="row end margin-top-1">
                        <div></div>
                        <div className="col-3">
                        <button className="add-shop-cart btn-full-width">Checkout</button>
                        </div>
                    </section>
                </>
            }
        </main>
    );
}

export default Cart;
