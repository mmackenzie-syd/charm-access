import './Products.css';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Breadcrumb from "../components/Breadcrumb";
import Paginator from "../components/Paginator";
import placeholder from './placeholder.png';
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import { getProducts } from "../state/apiActions";

function Products(props) {
    const dispatch = useDispatch();
    const categoriesApi = useSelector(state => state.categoriesApi);
    const categorySlug = props.match.params.category;
    const curPage = Number(props.match.params.page);

    const productsApi = useSelector(state => state.productsApi);
    const { loading: isLoading, error, data } = productsApi;
    const { data: categories } = categoriesApi;

    const pages = data ? data.pages : 0;
    const products = data ? data.products : [];

    let history = useHistory();

    useEffect(() => {
        dispatch(getProducts(categorySlug, curPage));
    }, [categorySlug, curPage]);

    const list = [];
    let showBreadcrumb = false;
    const category = categories.find(category => category.slug === categorySlug) || '';
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
        <main className="collections margin-top-2" style={{height: fixedHeight}}>
            { isLoading &&
                <Loading isLoading={isLoading} />
            }
            <section className="row  margin-top-5">
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
            {
                products &&
                <ul className="arrivals__grid">
                    {
                        products.map(product =>
                            <li key={product._id} className="arrivals__grid-item">
                                <div className="arrivals__grid-img-container" >
                                    <Link to={`/product/${product._id}`}>
                                        <img  className="arrivals__grid-img" src={placeholder} />
                                        <img  className="arrivals__grid-img absolute" src={product.thumbnail} />
                                    </Link>
                                </div>
                                <div className="row bottom margin-bottom-2">
                                    <div>
                                        <h2>{product.name}</h2>
                                        <p className="price">${product.price}</p>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            }
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
