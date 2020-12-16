import './Products.css';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Breadcrumb from "../components/Breadcrumb";
import Paginator from "../components/Paginator";
import placeholder from './placeholder.png';
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getProductsState} from "../state/apiActions";
import Message from "../components/Message";

function Products(props) {
    const dispatch = useDispatch();
    const categoriesApi = useSelector(state => state.categoriesApi);
    const categorySlug = props.match.params.category;

    const curPage = Number(props.match.params.page);

    const productsApi = useSelector(state => state.productsApi);
    const { loading: isLoading, error, data } = productsApi;

    const products = data ? data.products : [];
    const pages = data ? data.pages : 0;

    let history = useHistory();

    useEffect(() => {
        dispatch(getProductsState(categorySlug, curPage));
    }, [dispatch, categorySlug, curPage]);

    const list = [];
    let showBreadcrumb = false;
    let category;

    if (categoriesApi && categoriesApi.data) {
        category = categoriesApi.data.find(category => category.slug === categorySlug)
    }

    if (category && category.name) {
        list.push({
            name: 'Home Page',
            url: '/'
        });
        list.push({
            name: category.name,
            url: ''
        });
        showBreadcrumb = true;
    }

    const fixedHeight = (isLoading && !products) ? '700px' : 'auto';


    const url=`/products/${categorySlug}`;

    const handlePageClick = (page) => {
        history.push(`${url}/${page}`);
    }

    const handleLeftPageClick = () => {
        if ((curPage - 1) > 0) {
            history.push(`${url}/${curPage - 1}`);
        }
    }

    const handleRightPageClick = () => {
        if ((curPage + 1) <= pages) {
            history.push(`${url}/${curPage + 1}`);
        }
    }

    return (
        <main className="collections" style={{height: fixedHeight}}>
            { error && <Message variant="danger">{error}</Message> }
            { isLoading &&
                <Loading isLoading={isLoading} />
            }
            <section className="row  margin-top-1 margin-bottom-2">
                <Breadcrumb list={list} show={showBreadcrumb}/>
                <div className="collections__page-numbers">
                    { (pages > 0)
                        ? <div>
                            <span>Page</span>
                            <span className="fixed-width-ch">{curPage}</span>
                            <span>of {pages}</span>
                          </div>
                        : <span>&nbsp;</span>
                    }
                </div>
            </section>
            <section className="row margin-bottom-1 margin-top-1" style={{height: '5rem'}} >
                <h3 className="">{category && category.name}</h3>

                <Paginator
                    pages={pages}
                    curPage={curPage}
                    pageClick={handlePageClick}
                    leftPageClick={handleLeftPageClick}
                    rightPageClick={handleRightPageClick}
                />
            </section>
            <ul className="arrivals__grid">
                {
                    products && products.map(({ name, _id, thumbnail, price }) =>
                        <li key={_id} className="arrivals__grid-item">
                            <div className="arrivals__grid-img-container" >
                                <Link to={`/product/${_id}`}>
                                    <img alt="placeholder" className="arrivals__grid-img" src={placeholder} />
                                    { !isLoading &&
                                        <img  alt={name} className="arrivals__grid-img absolute" src={thumbnail} />
                                    }
                                </Link>
                            </div>
                            <div className="row bottom margin-bottom-2">
                                <div>
                                    <h2>{name}</h2>
                                    <p className="price">${price.toFixed(2)}</p>
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul>
            <section className="margin-top-1 margin-bottom-5">
                <div className="row center">
                    { (pages > 0)
                        ? <span className="">Page {curPage} of {pages}</span>
                        : <span>&nbsp;</span>
                    }
                </div>
            </section>
        </main>

    );
}

export default Products;
