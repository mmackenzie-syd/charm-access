import './Collections.css';
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../actions/productActions";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Breadcrumb from "../components/Breadcrumb";

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

    const list = [];
    let showBreadcrumb = false;
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
    return (
        <main className="collections margin-top-2">
            <section className="row left margin-top-5">
                <Breadcrumb list={list} show={showBreadcrumb}/>
            </section>
            <section className="row  margin-bottom-1 margin-top-1" >
                <h3 className="">{category && category.name}</h3>
                <div className="pagination">
                    {   pages.length > 1 &&
                        pages.map((page) => {
                            const active = (page === Number(curPage)) ? 'active' : '';
                            return <Link to={`/collections/${categorySlug}/${page}`} className={active}>{page}</Link>
                        })
                    }
                </div>
            </section>
            { loading
                ?  <Loading />
                :  <ul className="arrivals__grid">
                    {
                        (products && products.length === 0)
                            ? <li>Non currently available</li>
                            : products.map(product => {
                                return (
                                    <li key={product._id} className="arrivals__grid-item">
                                        <div className="arrivals__grid-img-container">
                                            <Link to={`/product/${product._id}`}>
                                                <img  className="arrivals__grid-img" src={product.thumbnail} />
                                            </Link>
                                        </div>
                                        <h2>{product.name}</h2>
                                        <p className="price">${product.price}</p>
                                    </li>
                                );
                            })
                    }
                </ul>
            }
        </main>
    );
}

export default Collections;
