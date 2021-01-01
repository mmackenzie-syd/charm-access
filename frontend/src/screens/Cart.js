import React from 'react';
import './Cart.css';
import Quantity from "../components/Quantity";
import Breadcrumb from "../components/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import {removeFromCart, updateCart} from "../state/cartActions";
import { Link } from "react-router-dom";

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { addedIds, quantityById, productById } = cart;
    let total = 0;
    if (addedIds) {
        total = addedIds.reduce((acc, id) => {
            acc = quantityById[id] * Number(productById[id].price) + acc;
            return acc;
        }, 0);
    }

    const onPlusBtn = (id, qty) => {
        dispatch(updateCart(id, qty + 1));
    }

    const onSubBtn = (id, qty) => {
        const updatedQty = qty - 1;
        if (updatedQty > 0) {
            dispatch(updateCart(id, updatedQty));
        }
    }

    const handleDelete = (id) => {
        dispatch(removeFromCart(id));
    }

    return (
        <main className="cart">
            <div className="cart-desktop">
                <section className="row">
                    <Breadcrumb
                        list={[{name: 'Home Page', url: '/'}, {name: 'Cart', url: ''}]}
                        show={true}
                    />
                    <Link to="/products/shop/1">&crarr; <span className="cart-continue">Continue Shopping</span> </Link>
                </section>
            </div>
            <section className="row margin-top-3 margin-bottom-3">
                <h3 className="">Basket</h3>
                <Link className="cart-mobile" to="/products/shop/1">&crarr; <span>Continue Shopping</span> </Link>
            </section>
            <div className="cart-mobile">
                <section className="">
                    { addedIds && addedIds.map( (id) => {
                        const { name, price, image } = productById[id];
                        const qty = quantityById[id];
                        const subTotal = qty * Number(price);
                        return (
                            <div key={id} className="cart-grid">
                                <div className="cart-item-img-wrap">
                                    <img className="cart-item-img" alt={name} src={image}/>
                                </div>
                                <div className="cart-item-detail">
                                    <p className="cart-item-name">{name}</p>
                                    <p className="cart-item-price">${price.toFixed(2)}</p>
                                    <Quantity
                                        value={qty}
                                        onSubBtn={() => onSubBtn(id, qty)}
                                        onPlusBtn={() => onPlusBtn(id, qty)}
                                    />
                                    <span
                                        onClick={() => handleDelete(id)}
                                        className="cart-item-cross"
                                    >
                                        &#10005;
                                    </span>
                                </div>
                            </div>
                        );
                    })
                    }
                </section>
            </div>
            <div className="cart-desktop">
                <section className="cart-table">
                        {addedIds && (addedIds.length !== 0) &&
                        <div className="row cart-table-heading">
                            <div className="col-2 padding-right-3">Product</div>
                            <div className="col-4">Description</div>
                            <div className="col-2">Price</div>
                            <div className="col-2 row">Quantity</div>
                            <div className="col-2 row right">Sub-total</div>
                        </div>
                        }
                        { addedIds && (addedIds.length === 0) &&
                        <div>
                            Your Cart is empty.
                        </div>
                        }
                        { addedIds && addedIds.map( (id) => {
                            const { name, price, image } = productById[id];
                            const qty = quantityById[id];
                            const subTotal = qty * Number(price);
                            return <div key={id} className="row top cart-table-item">
                                <div className="col-2 padding-right-3">
                                    <div className="cart-item-img">
                                        <img alt={name} src={image}/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <p><span className="">{name}</span></p>
                                    <div className="cart-table-delete-container">
                                        <div className="cart-table-delete" onClick={() => handleDelete(id)}>
                                            <span className="cart-item-cross">&#10005;</span> <span
                                            className="delete">DELETE</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 text-center">
                                    <p>${price.toFixed(2)}</p>
                                </div>
                                <div className="col-2">
                                    <div className="row">
                                        <Quantity
                                            value={qty}
                                            onSubBtn={() => onSubBtn(id, qty)}
                                            onPlusBtn={() => onPlusBtn(id, qty)}
                                        />
                                    </div>
                                </div>
                                <div className="col-2 row right">
                                    <p>${subTotal.toFixed(2)}</p>
                                </div>
                            </div>;
                        })
                        }
                    </section>
            </div>
            { addedIds && addedIds.length !== 0 &&
                <>
                    <section className="cart-total-wrap">
                        <p className="cart-total">Cart
                            total:&nbsp;&nbsp;${total.toFixed(2)}</p>
                    </section>
                    <section className="cart-checkout">
                        <button className="btn btn-secondary cart-checkout-btn">Checkout</button>
                    </section>
                </>
            }
        </main>
    );
}

export default Cart;
