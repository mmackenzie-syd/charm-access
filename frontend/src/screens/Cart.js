import React from 'react';
import './Cart.css';
import Quantity from "../components/Quantity";
import Breadcrumb from "../components/Breadcrumb";

function Cart() {
    const onQty = (qty, i) => {
        console.log('qty', i, ':', qty);
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
                    <div className="row table__heading">
                        <div className="col-2 padding-right-3">Product</div>
                        <div className="col-4">Description</div>
                        <div className="col-2">Price</div>
                        <div className="col-2 row">Quantity</div>
                        <div className="col-2 row right">Sub-total</div>
                    </div>
                    <div className="row top table__item">
                        <div className="col-2 padding-right-3">
                            <div className="table__img">
                                <img src="./images/1.jpg"/>
                            </div>
                        </div>
                        <div className="col-4">
                            <p className="table__p"><span className="">Silver earrings "Double ring"</span></p>
                            <div className="table__delete"><span className="table__delete-cross">&#10005;</span> <span
                                className="delete">Delete</span></div>
                        </div>
                        <div className="col-2 text-center"><p className="table__p">$350.00</p></div>
                        <div className="col-2">
                            <div className="row">
                                <Quantity callback={(e) => onQty(e, 1)} />
                            </div>
                        </div>
                        <div className="col-2 row right"><p className="table__p">$700.00</p></div>
                    </div>
                    <div className="row top table__item">
                        <div className="col-2 padding-right-3">
                            <div className="table__img">
                                <img src="./images/2.jpg"/>
                            </div>
                        </div>
                        <div className="col-4">
                            <p className="table__p"><span
                                className="">Silver earrings broach "Kitz-kitsyunya"</span></p>
                            <div className="table__delete"><span className="table__delete-cross">&#10005;</span> <span
                                className="delete">Delete</span></div>
                        </div>
                        <div className="col-2 text-center"><p className="table__p">$350.00</p></div>
                        <div className="col-2">
                            <div className="row">
                                <Quantity callback={(e) => onQty(e, 2)} />
                            </div>
                        </div>
                        <div className="col-2 row right">
                            <p className="table__p ">$700.00</p>
                        </div>
                    </div>
                </section>
            </div>
            <section className="cart__total">
                <h3 className="product__brand-title inline-block margin-right-2 margin-bottom-2 margin-top-1">Cart total:</h3>
                <h3 className="product__brand-title inline-block margin-bottom-2 margin-top-1">$1,000.00</h3>
            </section>
            <section className="row end margin-top-1">
                <div></div>
                <div className="col-3">
                    <button className="add-shop-cart btn-full-width">Checkout</button>
                </div>
            </section>
        </main>
    );
}

export default Cart;
