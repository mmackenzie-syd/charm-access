import React, {Fragment, useContext, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Product.css';
import Selector from "../components/Selector";
import {detailsProduct} from "../actions/productActions";
import Loading from "../components/Loading";
import Breadcrumb from "../components/Breadcrumb";
import {CategoriesContext} from "../providers/CategoriesProvider";

function Product(props) {
    const {categories} = useContext(CategoriesContext);
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product } = productDetails;

    let category;
    let categorySlug;
    if (categories && product) {
        categorySlug = product.category;
        category = categories.find(category => (category.slug === categorySlug));
    }

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    const onQty = (value) => {
        console.log('quantity', value);
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

    return (
        <main className="product margin-top-5" style={{minHeight: '500px'}}>
            { loading
                ? <Loading />
                : <section className="row top">
                    <div className="col-6 product__img">
                        <img src={product.image}/>
                    </div>
                    <div className="col-6 padding-left-3">
                        <div>
                            <Breadcrumb list={list} show={showBreadcrumb}/>
                        </div>
                        <h2 className="product__title margin-bottom-1">{product.name}</h2>
                        <h3 className="product__brand-title margin-bottom-2">Charm Accessories</h3>
                        <div className="product__price margin-bottom-4">${product.price}</div>
                        <div className="margin-bottom-3" style={{width: '100%'}}>
                            <Selector callback={onQty} count={10}/>
                        </div>
                        <button className="add-shop-cart btn-full-width margin-bottom-3">Add to Shopping Cart</button>
                        <button className="buy btn-full-width">Buy</button>
                        <p className="product__description margin-top-4">{product.description}</p>
                        <div className="product__share-container">
                            <div className="product__share margin-bottom-2">Share this</div>
                            <div className="social-icons">
                                <div className="social-icons__img-wrap">
                                    <img className="social-icons__img" src={`${process.env.PUBLIC_URL}/images/facebook.png`} />
                                </div>
                                <div className="social-icons__img-wrap">
                                    <img className="social-icons__img" src={`${process.env.PUBLIC_URL}/images/instagram.png`} />
                                </div>
                                <div className="social-icons__img-wrap">
                                    <img className="social-icons__img" src={`${process.env.PUBLIC_URL}/images/youtube.png`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </main>
    );
}

export default Product;

