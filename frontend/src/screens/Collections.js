import './Collections.css';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {listProducts} from "../actions/productActions";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Breadcrumb from "../components/Breadcrumb";
import Axios from "axios";

import placeholder from './placeholder.png';

function Collections(props) {
    const categorySlug = props.match.params.category;
    const curPage = Number(props.match.params.page);

    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    let timer;

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const { data } = await Axios.get(`/api/products/${categorySlug}/${curPage}`);
            setData(data);
            setIsLoading(false);
            // timer = setTimeout(() => {
            //     setData(data);
            //     setIsLoading(false);
            // }, 1500);
            // return () => clearTimeout(timer);
        };
        fetchData();
    }, [curPage, categorySlug]);

    const pages = data ? [...Array(data.pages).keys()].map(key => key + 1) : [];

    const products = data ? data.products : [];
    const categories = data ? data.categories : [];

    let category;
    if (categories) {
        category = (categorySlug === 'shop')
            ? { name: 'Shop'}
            : categories.find(category => (category.slug === categorySlug));
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

    const fixedHeight = (isLoading && !products) ? '700px' : 'auto';

    return (
        <main className="collections margin-top-2" style={{height: fixedHeight}}>
            { isLoading &&
                <Loading isLoading={isLoading} />
            }
            <section className="row left margin-top-5">
                <Breadcrumb list={list} show={showBreadcrumb}/>
            </section>
            <section className="row  margin-bottom-1 margin-top-1" >
                <h3 className="">{category && category.name}</h3>
                <div className="pagination">
                    {   pages.length > 1 &&
                        pages.map((page) => {
                            const active = (page === Number(curPage)) ? 'active' : '';
                            return <Link key={page} to={`/collections/${categorySlug}/${page}`} className={active}>{page}</Link>
                        })
                    }
                </div>
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
                                <h2>{product.name}</h2>
                                <p className="price">${product.price}</p>
                            </li>
                        )
                    }
                </ul>
            }
        </main>

    );
}

export default Collections;

/*





<Link to={`/collections/${categorySlug}/${(curPage - 1) > 0 ? (curPage - 1) : curPage}`}>

<Link to={`/collections/${categorySlug}/${(curPage + 1) < (pages.length + 1) ? (curPage + 1) : curPage}`}>

    <div className="arrivals__grid-img-container" style={{border: "1px solid red"}}>
                                            <Link to={`/product/${product._id}`}>
                                                <img  className="arrivals__grid-img" src={product.thumbnail} />
                                            </Link>
                                        </div> */

/*
<ul className="kks__grid">
                    {
                        (products && products.length === 0)
                            ? <li>Non currently available</li>
                            : products.map(product => {
                                return (
                                    <li key={product._id} className="kks__grid-item">

                                        <h2>{product.name}</h2>
                                        <p className="price">${product.price}</p>
                                    </li>
                                );
                            })

                    }
                </ul>
 */
