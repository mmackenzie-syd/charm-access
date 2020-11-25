import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Product.css';
import Selector from "../components/Selector";
import Loading from "../components/Loading";
import Breadcrumb from "../components/Breadcrumb";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import {getProduct} from "../state/apiActions";
import ArrivalsSlide from "../components/ArrivalsSlide";
import Message from "../components/Message";
import {addToCart} from "../state/cartActions";

const arrivalsData = [
    {
        _id: '1',
        name: 'Rose Bouquet Brooch',
        category: 'brooches',
        image: '/products/1.jpg',
        thumbnail: '/products/1_thb.jpg',
        price: 120,
    },
    {
        _id: '2',
        name: 'Rose Butterfly Brooch',
        category: 'brooches',
        image: '/products/2.jpg',
        thumbnail: '/products/2_thb.jpg',
        price: 120,
    },
    {
        _id: '3',
        name: 'Single Rose Brooch',
        category: 'brooches',
        image: '/products/3.jpg',
        thumbnail: '/products/3_thb.jpg',
        price: 120,
    },
    {
        _id: '4',
        name: 'White Butterfly Brooch',
        category: 'brooches',
        image: '/products/4.jpg',
        thumbnail: '/products/4_thb.jpg',
        price: 120,
    },
];

function Product(props) {
    const dispatch = useDispatch();
    const id = props.match.params.id;
    const categoriesApi = useSelector(state => state.categoriesApi);
    const productsApi = useSelector(state => state.productsApi);
    const productApi = useSelector(state => state.productApi);
    const { loading, error, data } = productApi;
    const { categories } = categoriesApi;
    const products = (productsApi && productsApi.data) ? productsApi.data.products : [];

    let existingProduct = products.find(product => (product._id === id));

    const product = (!existingProduct && data) ? data : existingProduct;

    let category;
    let categorySlug;
    if (categories && product) {
        categorySlug = product.category;
        category = categories.find(category => (category.slug === categorySlug));
    }

    useEffect(() => {
        if (!existingProduct) {
            dispatch(getProduct(id));
        }
    }, [dispatch, id, existingProduct]);

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

    const handleAddToCart = () => {
        dispatch(addToCart(product, 1));
    }

    return (
        <main className="product margin-top-5" style={{minHeight: '500px'}}>
            { error && <Message variant="danger">{error}</Message> }
            { loading && <Loading /> }
            { product &&
                <>
                <section className="row top">
                    <div className="col-6 product__img">
                        <img alt="product.name" src={product.image}/>
                    </div>
                    <div className="col-6 padding-left-3">
                        <div>
                            <Breadcrumb list={list} show={showBreadcrumb}/>
                        </div>
                        <div className="row  margin-bottom-1">
                            <h2 className="product__title">{product.name}</h2>
                            <div>
                                <button className={`page-btn`}>
                                    <LeftArrowIcon
                                        width={'1.2rem'}
                                        height={'1.2rem'}
                                        offset={'.3rem'}
                                    />
                                </button>
                                <button className={`page-btn`}>
                                    <RightArrowIcon
                                        width={'1.2rem'}
                                        height={'1.2rem'}
                                        offset={'.3rem'}
                                    />
                                </button>
                            </div>
                        </div>
                        <h3 className="product__brand-title margin-bottom-2">Charm Accessories</h3>
                        <div className="product__price margin-bottom-4">${product.price}</div>
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
                <section className="arrivals margin-top-5">
                    <h3>Similar Items</h3>
                    <ArrivalsSlide items={arrivalsData} />
                </section>
                </>
            }
        </main>
    );
}

export default Product;

