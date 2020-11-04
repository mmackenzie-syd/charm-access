import './Collections.css';
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../actions/productActions";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

function Collections(props) {
    const categorySlug = props.match.params.category;
    const curPage = props.match.params.page;
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const categoryList = useSelector(state => state.categoryList);
    const { categories } = categoryList;

    let category;
    if (categories) {
        category = (categorySlug === 'jewellery')
            ? { name: 'Jewellery'}
            : categories.find(category => (category.slug === categorySlug));
    }

    const { loading, error, pageData } = productList;

    useEffect(() => {
        dispatch(listProducts(categorySlug, curPage))
    }, [curPage, categorySlug]);

    let products;
    const pages = [];
    if (pageData) {
        products = pageData.products;
        for (let i = 0; i < pageData.pages; i++){
            pages.push(i + 1);
        }
    }
    return (
        <main className="collections margin-top-2 margin-bottom-1" style={{minHeight: '500px'}}>
            <section className="margin-top-2">
                <ul className="collections__breadcrumb">
                    <li className="collections__breadcrumb-item">Home Page</li>
                    <li className="collections__breadcrumb-item">/</li>
                    <li className="collections__breadcrumb-item">{category && category.name}</li>
                </ul>
                <div className="row">
                    <h2 className="collections__title margin-bottom-5">{category && category.name}</h2>
                    <div className="pagination">
                        {   pages.length > 1 &&
                            pages.map((page) => {
                                const active = (page === Number(curPage)) ? 'active' : '';
                                return <Link to={`/collections/${categorySlug}/${page}`} className={active}>{page}</Link>
                            })
                        }
                    </div>
                </div>

            </section>
            { loading
                ?  <Loading />
                :  <section className="collections__grid">
                    {
                        (products.length === 0)
                            ? <div>Non currently available</div>
                            : products.map(product => {
                                return (
                                    <div key={product._id} className="collections__grid-item">
                                        <Link to={`/product/${product._id}`}>
                                            <div className="collections__img">
                                                <img src={product.thumbnail}/>
                                            </div>
                                            <div className="margin-top-2">
                                                <div className="collections__description">{product.name}</div>
                                                <div className="margin-top-1 collections__price">${product.price}</div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })
                    }
                </section>
            }
        </main>
    );
}

export default Collections;
