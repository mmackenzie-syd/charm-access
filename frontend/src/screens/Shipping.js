import './Shipping.css';
import Breadcrumb from "../components/Breadcrumb";
import React from "react";
import Paginator from "../components/Paginator";

function Shipping() {
    return (
        <main className="collections margin-top-3 margin-bottom-1">
            <section className="margin-top-1">
                <div>
                    <Breadcrumb
                        list={[{name: 'Home Page', url: '/'}, {name: 'Shipping & Payment', url: ''}]}
                        show={true}
                    />
                </div>
            </section>
            <section className="row center margin-bottom-5 margin-top-5">
                <div className="col-7">
                    <h3 className="margin-bottom-5">Shipping & Payment</h3>
                    <h3 className="product__brand-title">Delivery</h3>
                    <p className="product__description">Delivery is carried out throughout Australia by the Australia
                        Post.</p>

                    <h3 className="product__brand-title">Payment</h3>
                    <p className="product__description">We offer our clients two payment methods:</p>
                    <ol className="shipping__list">
                        <li className="shipping__list-item">Paypal or Direct Debit Card.</li>
                        <li className="shipping__list-item">Prepayment via bank transfer to Charm Accessories.</li>
                    </ol>
                    <h3 className="product__brand-title">Exchange and return</h3>
                    <p className="product__description">The online silver store Charm Accessories makes an exchange and
                        return of good quality goods within two weeks from the date of purchase, if the following conditions
                        are met: if the product has not been used since the date of purchase and the tag has been
                        retained.</p>

                    <p className="product__description">Unfortunately, if at least one of the above conditions is violated,
                        then we will not be able to issue a refund or exchange the jewelry.</p>

                    <p className="product__description">The money for the returned product of good quality is returned to the
                        client's card within 5 working days.</p>

                    <p className="product__description">Exchange and return of good quality goods is carried out at the
                        expense of the client.</p>

                    <p className="product__description">The exchange of goods is carried out up to 5 working days from the
                        date of receipt of the parcel at New mail.</p>

                    <p className="product__description">Products of inadequate quality are sent to us for examination for up
                        to 14 days, and if the jewelry has lost its properties through no fault of the client, our company
                        Charm Accessories will exchange the product for a similar one. In the event that a similar product
                        is not available, the client has the right to choose a new product for the amount of the returned
                        product or a refund.
                    </p>
                </div>
            </section>
        </main>
    );
}

export default Shipping;
