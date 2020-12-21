import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Product.css';
import Selector from "../components/Selector";
import Loading from "../components/Loading";
import Breadcrumb from "../components/Breadcrumb";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import {getNextProductState, getProductState} from "../state/apiActions";
import ArrivalsSlide from "../components/ArrivalsSlide";
import Message from "../components/Message";
import {addToCart} from "../state/cartActions";
import {getProduct} from "../api/unauthApi";
import {getNextId, getPreviousId} from "../state/api";
import {useHistory} from "react-router";

function Product(props) {
    let history = useHistory();
    const dispatch = useDispatch();
    const id = props.match.params.id;
    const [qty, setQty] = useState(1);
    const [nextDisabled, setNextDisabled] = useState(false);
    const [previousDisabled, setPreviousDisabled] = useState(false);
    const categoriesApi = useSelector(state => state.categoriesApi);
    const productApi = useSelector(state => state.productApi);
    const { loading, error, data } = productApi;
    const { categories } = categoriesApi;

    let product;
    let products;
    if (data && data.product) {
        product = data.product;
    }

    if (data && data.products) {
        products = data.products;
    }

    let category;
    let categorySlug;
    if (categories && product) {
        categorySlug = product.category;
        category = categories.find(category => (category.slug === categorySlug));
    }

    useEffect(() => {
        dispatch(getProductState(id));
    }, [dispatch, id]);

    const onQty = (value) => {
       setQty(value);
    };

    const list = [];
    let showBreadcrumb = false;
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
        const resp = await getNextId(id);
        if (resp.data && resp.data.id !== -1) {
            history.push(`/product/${resp.data.id}`);
        }
    }

    const getPrevious = async () => {
        const resp = await getPreviousId(id);
        if (resp.data && resp.data.id !== -1) {
            history.push(`/product/${resp.data.id}`);
        }
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
                                <button className={`page-btn`} onClick={getPrevious} disabled={previousDisabled}>
                                    <LeftArrowIcon
                                        width={'1.2rem'}
                                        height={'1.2rem'}
                                        offset={'.3rem'}
                                    />
                                </button>
                                <button className={`page-btn`} onClick={getNext} disabled={nextDisabled}>
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
                        products && (products.length === 4)
                            ? <section className="arrivals margin-top-5">
                                <h3>Similar Items</h3>
                                <ArrivalsSlide items={products} />
                              </section>
                            : <div className="margin-bottom-5"></div>
                    }
                </>
            }
        </main>
    );
}

export default Product;

