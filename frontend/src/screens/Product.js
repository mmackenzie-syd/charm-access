import React from 'react';
import './Product.css';
import Selector from "../components/Selector";

function Product() {
    const onQty = (value) => {
        console.log('quantity', value);
    };
    return (
        <main className="product margin-top-2 margin-bottom-1">
            <section className="margin-top-2 margin-bottom-3">
                <ul className="collections__breadcrumb">
                    <li className="collections__breadcrumb-item">Home Page</li>
                    <li className="collections__breadcrumb-item">/</li>
                    <li className="collections__breadcrumb-item">Silver Earrings</li>
                    <li className="collections__breadcrumb-item">/</li>
                    <li className="collections__breadcrumb-item">Silver earrings broach Kitz-kitsyunya</li>
                </ul>
            </section>
            <section className="row top">
                <div className="col-6 product__img">
                    <img src="../../images/products/5.jpg"/>
                </div>
                <div className="col-6 padding-left-3">
                    <h2 className="product__title margin-bottom-1">Silver earrings broach "Kitz-kitsyunya"</h2>
                    <h3 className="product__brand-title margin-bottom-2">Charm Accessories</h3>
                    <div className="product__price margin-bottom-4">$300.00</div>
                    <div className="margin-bottom-3" style={{width: '100%'}}>
                        <Selector callback={onQty}/>
                    </div>
                    <button className="btn-secondary btn-full-width margin-bottom-2">Add to Shopping Cart</button>
                    <button className="btn-primary btn-full-width">Buy</button>
                    <p className="product__description margin-top-4">Silver earrings "Kitz-kitsyunya" - original
                        earrings are decorated with neat cats, which are placed on minimalistic rings of the original
                        design. They will give the image of lightness and childlike ease, an ideal choice for those who
                        love kitties and cats.</p>
                    <div className="margin-top-5 product__share">Share this:</div>
                    <div className="margin-top-2">
                        <svg className="icon margin-right-2" width="24" height="24" ariaHidden="true" focusable="false"
                             role="presentation" viewBox="0 0 24 24">
                            <path
                                d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"></path>
                        </svg>
                        <svg className="icon margin-right-2" width="24" height="24" aria-hidden="true" focusable="false"
                             role="presentation" viewBox="0 0 20 20">
                            <path fill="#444"
                                  d="M19.551 4.208q-.815 1.202-1.956 2.038 0 .082.02.255t.02.255q0 1.589-.469 3.179t-1.426 3.036-2.272 2.567-3.158 1.793-3.963.672q-3.301 0-6.031-1.773.571.041.937.041 2.751 0 4.911-1.671-1.284-.02-2.292-.784T2.456 11.85q.346.082.754.082.55 0 1.039-.163-1.365-.285-2.262-1.365T1.09 7.918v-.041q.774.408 1.773.448-.795-.53-1.263-1.396t-.469-1.864q0-1.019.509-1.997 1.487 1.854 3.596 2.924T9.81 7.184q-.143-.509-.143-.897 0-1.63 1.161-2.781t2.832-1.151q.815 0 1.569.326t1.284.917q1.345-.265 2.506-.958-.428 1.386-1.732 2.18 1.243-.163 2.262-.611z"></path>
                        </svg>
                        <svg className="icon" width="24" ariaHidden="true" focusable="false" role="presentation"
                             viewBox="0 0 24 24">
                            <path
                                d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"></path>
                        </svg>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Product;

