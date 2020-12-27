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
        <main className="cart margin-top-3">
            <section className="row margin-top-1">
                <Breadcrumb
                    list={[{name: 'Home Page', url: '/'}, {name: 'Cart', url: ''}]}
                    show={true}
                />
                <Link to="/products/shop/1">&crarr; <span className="cart__continue">Continue Shopping</span> </Link>
            </section>
            <section className="row margin-top-5 ">
                <h3 className="margin-bottom-3">Basket</h3>
            </section>
            <div className="row">
                <section className="table">
                    {addedIds && (addedIds.length !== 0) &&
                        <div className="row table__heading">
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
                        return <div key={id} className="row top table__item">
                                <div className="col-2 padding-right-3">
                                    <div className="table__img">
                                        <img alt={name} src={image}/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <p className="table__p"><span className="">{name}</span></p>
                                    <div className="table-delete-container">
                                        <div className="table-delete" onClick={() => handleDelete(id)}>
                                            <span className="table-delete-cross">&#10005;</span> <span
                                            className="delete">DELETE</span>
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
                                            onSubBtn={() => onSubBtn(id, qty)}
                                            onPlusBtn={() => onPlusBtn(id, qty)}
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
            { addedIds && addedIds.length !== 0 &&
                <>
                    <section className="cart__total">
                        <h3 className="product__brand-title inline-block margin-right-2 margin-bottom-2 margin-top-1">Cart
                            total:</h3>
                        <h3 className="product__brand-title inline-block margin-bottom-2 margin-top-1">${total}</h3>
                    </section>
                        <section className="row end margin-top-1">
                        <div></div>
                        <div className="col-3">
                        <button className="btn btn-secondary full-width">Checkout</button>
                        </div>
                    </section>
                </>
            }
        </main>
    );
}

export default Cart;
