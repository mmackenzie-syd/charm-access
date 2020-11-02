import React from 'react';
import './Cart.css';
import Quantity from "../components/Quantity";

function Cart() {
    const onQty = (qty, i) => {
        console.log('qty', i, ':', qty);
    }

    return (
        <main className="cart margin-top-2 margin-bottom-1">
            <section className="margin-top-2">
                <ul className="collections__breadcrumb">
                    <li className="collections__breadcrumb-item">Home Page</li>
                    <li className="collections__breadcrumb-item">/</li>
                    <li className="collections__breadcrumb-item">Cart</li>
                </ul>
            </section>
            <h2 className="cart__title margin-top-3 margin-bottom-3">Basket</h2>
            <section className="table">
                <div className="row table__heading">
                    <div className="col-2 padding-right-3">Product</div>
                    <div className="col-4">Description</div>
                    <div className="col-2 text-center">Price</div>
                    <div className="col-2 text-center">Number</div>
                    <div className="col-2 text-right">Total</div>
                </div>
                <div className="row top table__item">
                    <div className="col-2 padding-right-3">
                        <div className="table__img">
                            <img src="./images/products/1.jpg"/>
                        </div>
                    </div>
                    <div className="col-4">
                        <p className="table__p"><span className="underline">Silver earrings "Double ring"</span></p>
                        <div className="table__delete"><span className="table__delete-cross">&#10005;</span> <span
                            className="underline">Delete</span></div>
                    </div>
                    <div className="col-2 text-center"><p className="table__p">$350.00</p></div>
                    <div className="col-2">
                        <div className="row center">
                            <Quantity callback={(e) => onQty(e, 1)} />
                        </div>
                    </div>
                    <div className="col-2 text-right"><p className="table__p">$700.00</p></div>
                </div>
                <div className="row top table__item">
                    <div className="col-2 padding-right-3">
                        <div className="table__img">
                            <img src="./images/products/2.jpg"/>
                        </div>
                    </div>
                    <div className="col-4">
                        <p className="table__p"><span
                            className="underline">Silver earrings broach "Kitz-kitsyunya"</span></p>
                        <div className="table__delete"><span className="table__delete-cross">&#10005;</span> <span
                            className="underline">Delete</span></div>
                    </div>
                    <div className="col-2 text-center"><p className="table__p">$350.00</p></div>
                    <div className="col-2">
                        <div className="row center">
                            <Quantity callback={(e) => onQty(e, 2)} />
                        </div>
                    </div>
                    <div className="col-2 text-right"><p className="table__p">$700.00</p></div>
                </div>
            </section>
            <section className="row table__total">
                <span className="cart__total-outcome">Outcome</span>
                <span className="cart__total-price">$1,000.00</span>
            </section>
            <section className="row margin-top-5">
                <div className="col-9"></div>
                <div className="col-3">
                    <button className="btn-primary btn-full-width">Checkout</button>
                    <div className="margin-top-3 text-right"><a className="link">Continue shopping</a></div>
                </div>

            </section>
        </main>
    );
}

export default Cart;
