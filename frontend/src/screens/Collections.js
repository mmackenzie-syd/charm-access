import './Collections.css';
import React, {useContext, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Breadcrumb from "../components/Breadcrumb";
import Paginator from "../components/Paginator";
import Axios from "axios";
import placeholder from './placeholder.png';
import { CategoriesContext } from "../providers/CategoriesProvider";
import config from "../config";
const { api } = config;


function Collections(props) {
    const {categories} = useContext(CategoriesContext);
    const categorySlug = props.match.params.category;
    const curPage = Number(props.match.params.page);

    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    let timer;

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
             const { data } = await Axios.get(`/api/products/${categorySlug}/${curPage}`);
            // const { data } = await Axios.get(`${api}/products/${category}/${curPage}`);
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
                <Paginator pages={pages} curPage={curPage} url={ `/collections/${categorySlug}`} />
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
