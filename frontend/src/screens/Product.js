import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Product.css';
import Selector from "../components/Selector";
import Loading from "../components/Loading";
import Breadcrumb from "../components/Breadcrumb";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import ArrivalsSlide from "../components/ArrivalsSlide";
import Message from "../components/Message";
import {addToCart} from "../state/cartActions";
import {useHistory} from "react-router";

const getNextId = (id, products) => {
    const index = products.findIndex(product => product._id === id);
    const maxIndex = products.length - 1;
    const nextIndex = ((index + 1) > maxIndex) ? 0 : index + 1;
    return products[nextIndex]._id;
}

const getPrevId = (id, products) => {
    const index = products.findIndex(product => product._id === id);
    const maxIndex = products.length - 1;
    const prevIndex = ((index - 1) > 0) ? index -1 : maxIndex;
    return products[prevIndex]._id;
}


function Product(props) {
    let history = useHistory();
    const dispatch = useDispatch();
    const id = props.match.params.id;
    const categorySlug = props.match.params.category;
    const [qty, setQty] = useState(1);
    const productsApi = useSelector(state => state.productsApi);
    const categoriesApi = useSelector(state => state.categoriesApi);

    // start temp
    let loading = false;
    let error = false;
    // end temp

    let product;
    let similarProducts = [];
    let products = [];
    if (productsApi && productsApi.data) {
        products = productsApi.data.products;
        product = products.find(product => product._id === id)
    }

    const onQty = (value) => {
       setQty(value);
    };

    const list = [];
    let showBreadcrumb = false;
    let category;

    if (categoriesApi && categoriesApi.data) {
        category = categoriesApi.data.find(category => category.slug === categorySlug)
    }

    if (category && category.name) {
        if (product && product.name) {
            list.push({
                name: 'Home Page',
                url: '/'
            });
            list.push({
                name: category.name,
                url: `/collections/${categorySlug}/1`
            });
            list.push({
                name: product.name,
                url: ''
            });
            showBreadcrumb = true;
        }
    }

    const handleAddToCart = () => {
        dispatch(addToCart(id, product, qty));
        history.push('/cart');
    }

    const getNext = async () => {
        const id = getNextId(product._id, products);
        history.push(`/product/${categorySlug}/${id}`);
    }

    const getPrevious = async () => {
        const id = getPrevId(product._id, products);
        history.push(`/product/${categorySlug}/${id}`);
    }

    return (
        <main className="product margin-top-5" style={{minHeight: '500px'}}>
            { error && <Message variant="danger">{error}</Message> }

            { product &&
                <>
                <section className="row top">
                    <div className="col-6 product__img-wrap">
                        {
                            loading &&
                            <div className={"product__img-loading"}>
                                <img src={`${process.env.PUBLIC_URL}/images/loading.gif`} />
                            </div>
                        }
                        <img
                            className="product__img"
                            alt="product.name"
                            src={ loading ? `${process.env.PUBLIC_URL}/images/largeplaceholder.png`: product.image}
                        />
                    </div>
                    <div className="col-6 padding-left-3">
                        <div>
                            <Breadcrumb list={list} show={showBreadcrumb}/>
                        </div>
                        <div className="row  margin-bottom-1">
                            <h2 className="product__title">{product.name}</h2>
                            <div>
                                <button className={`page-btn`} onClick={getPrevious}>
                                    <LeftArrowIcon
                                        width={'1.2rem'}
                                        height={'1.2rem'}
                                        offset={'.3rem'}
                                    />
                                </button>
                                <button className={`page-btn`} onClick={getNext}>
                                    <RightArrowIcon
                                        width={'1.2rem'}
                                        height={'1.2rem'}
                                        offset={'.3rem'}
                                    />
                                </button>
                            </div>
                        </div>
                        <h3 className="product__brand-title margin-bottom-2">Charm Accessories</h3>
                        <div className="product__price margin-bottom-4">${product.price.toFixed(2)}</div>
                        <div className="margin-bottom-3" style={{width: '100%'}}>
                            <Selector callback={onQty} count={10}/>
                        </div>
                        <button
                            className="add-shop-cart btn-full-width margin-bottom-3"
                            onClick={handleAddToCart}
                        >
                            Add to Shopping Cart
                        </button>
                        <button className="buy btn-full-width">Buy</button>
                        <p className="product__description margin-top-4">{product.description}</p>
                        <div className="product__share-container">
                            <div className="product__share margin-bottom-2">Share this</div>
                            <div className="social-icons">
                                <div className="social-icons__img-wrap">
                                    <img alt="facebook" className="social-icons__img" src={`${process.env.PUBLIC_URL}/images/facebook.png`} />
                                </div>
                                <div className="social-icons__img-wrap">
                                    <img alt="instagram" className="social-icons__img" src={`${process.env.PUBLIC_URL}/images/instagram.png`} />
                                </div>
                                <div className="social-icons__img-wrap">
                                    <img alt="youtube" className="social-icons__img" src={`${process.env.PUBLIC_URL}/images/youtube.png`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                    {
                        similarProducts && (similarProducts.length === 4)
                            ? <section className="arrivals margin-top-5">
                                <h3>Similar Items</h3>
                                <ArrivalsSlide items={similarProducts} />
                              </section>
                            : <div className="margin-bottom-5"></div>
                    }
                </>
            }
        </main>
    );
}

export default Product;

