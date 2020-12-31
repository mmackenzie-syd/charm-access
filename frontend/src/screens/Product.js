import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Product.css';
import Selector from "../components/Selector";
import Loading from "../components/Loading";
import Breadcrumb from "../components/Breadcrumb";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import ArrivalsSlide from "../components/ArrivalsSlide";
import {addToCart} from "../state/cartActions";
import {useHistory} from "react-router"

const getSimilarProducts = (curIndex, products) => {
    let similarProducts = products.filter((product, index) => index !== curIndex);
    if (similarProducts.length < 4) {
        return [];
    } else {
        return similarProducts.slice(0, 4);
    }
}

const findProductFromName = (name, products) => {

}

function Product(props) {
    let history = useHistory();
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);
    const productsApi = useSelector(state => state.productsApi);
    const categoriesApi = useSelector(state => state.categoriesApi);
    let product;
    let similarProducts = [];
    let products = [];
    let categorySlug;
    let page;
    const list = [];
    let showBreadcrumb = false;
    let category;

    products = productsApi.data.products;
    categorySlug = props.match.params.category;
    const name = props.match.params.name;
    const index = products.findIndex(product => product.name === name);

    product = products[index];
    if (categoriesApi && categoriesApi.data) {
        category = categoriesApi.data.find(category => category.slug === categorySlug)
    }

    if (category && category.name) {
        if (product && product.name) {
            list.push({name: 'Home Page', url: '/'});
            list.push({name: category.name, url: `/products/${categorySlug}/1`});
            list.push({name: product.name, url: ''});
            showBreadcrumb = true;
        }
    }
    similarProducts = getSimilarProducts(index, products);

    const onQty = (value) => {
       setQty(value);
    };

    const handleAddToCart = () => {
        dispatch(addToCart(product._id, product, qty));
    }

    const goToIndex = (index) => {
        const nextName = products[index].name;
        history.push(`/product/${categorySlug}/${nextName}`);
    }

    const getNext = async () => {
        const nextIndex = (index + 1) < products.length ? index + 1 : 0;
        goToIndex(nextIndex);
    }

    const getPrevious = async () => {
        const prevIndex = (index - 1) >= 0 ? index - 1 : products.length - 1;
        goToIndex(prevIndex);
    }

    return (
        <main className="product" style={{minHeight: '500px'}}>
            { product &&
                <>
                <div className="mobile product-mobile">
                    <div className="row margin-bottom-1">
                        <div>&nbsp;</div>
                        <div className="row">
                            <button className='btn btn-secondary btn-icon' onClick={getPrevious}>
                                <LeftArrowIcon width={'1.2rem'} height={'1.2rem'} offset={'.3rem'}/>
                            </button>
                            <button className='btn btn-secondary btn-icon' onClick={getNext}>
                                <RightArrowIcon width={'1.2rem'} height={'1.2rem'} offset={'.3rem'}/>
                            </button>
                        </div>
                    </div>
                </div>
                <section className="grid grid-col-2-large">
                    <div className="product-img-rel margin-bottom-2">
                        <img
                            className="product-img"
                            alt={product.name}
                            src ={product.thumbnail}
                        />
                        <img
                            className="product-img product-img-abs"
                            alt={product.name}
                            src ={product.image}
                        />
                    </div>
                    <div className="">
                        <div>
                            <div className="product-desktop">
                                <Breadcrumb list={list} show={showBreadcrumb}/>
                            </div>
                            <div className="row margin-bottom-1">
                                <h3 className="">{product.name}</h3>
                                <div className="product-desktop product-nav-arrows">
                                    <button className='btn btn-secondary btn-icon' onClick={getPrevious}>
                                        <LeftArrowIcon width={'1.2rem'} height={'1.2rem'} offset={'.3rem'}/>
                                    </button>
                                    <button className='btn btn-secondary btn-icon' onClick={getNext}>
                                        <RightArrowIcon width={'1.2rem'} height={'1.2rem'} offset={'.3rem'}/>
                                    </button>
                                </div>
                            </div>
                            <h4 className="product-brand-title margin-bottom-2">Charm Accessories</h4>
                            <div className="product-price margin-bottom-4">${product.price.toFixed(2)}</div>
                        </div>
                        <div className="margin-bottom-3" style={{width: '100%'}}>
                            <Selector callback={onQty} count={10}/>
                        </div>
                        <button
                            className="btn btn-secondary full-width margin-bottom-3"
                            onClick={handleAddToCart}
                        >
                            Add to Shopping Cart
                        </button>
                        <button className="btn btn-primary full-width">Buy</button>
                        <p className="margin-top-3">{product.description}</p>
                        <div>
                            <div className="product-share margin-bottom-2">Share this</div>
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
                            ? <section className="arrivals margin-top-4 desktop">
                                <h3 className="margin-bottom-2">Similar Items</h3>
                                <ArrivalsSlide items={similarProducts} />
                              </section>
                            : <div className="margin-bottom-5"></div>
                    }
                    <div className="margin-bottom-2 mobile"></div>
                </>
            }
        </main>
    );
}

export default Product;

