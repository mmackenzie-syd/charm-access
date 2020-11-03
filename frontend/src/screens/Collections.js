import './Collections.css';

import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../actions/productActions";

function Collections(props) {
    const categorySlug = props.match.params.category;
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const categoryList = useSelector(state => state.categoryList);
    const { categories } = categoryList;
    let category;
    if (categories) {
        category = categories.find(category => (category.slug === categorySlug));
    }
    const { loading, error, products } = productList;
    useEffect(() => {
        dispatch(listProducts(categorySlug))
    }, []);
    return (
        <main className="collections margin-top-2 margin-bottom-1" style={{minHeight: '500px'}}>
            <section className="margin-top-2">
                <ul className="collections__breadcrumb">
                    <li className="collections__breadcrumb-item">Home Page</li>
                    <li className="collections__breadcrumb-item">/</li>
                    <li className="collections__breadcrumb-item">{category && category.name}</li>
                </ul>
                <h2 className="collections__title margin-bottom-5">{category && category.name}</h2>
            </section>
            { loading
                ?  <div>...loading</div>
                :  <section className="collections__grid">
                    {
                        (products.length === 0)
                            ? <div>Non currently available</div>
                            : products.map(product => {
                                return (
                                    <div key={product._id} className="collections__grid-item">
                                        <a href={`/product/${product._id}`}>
                                            <div className="collections__img">
                                                <img src={product.image}/>
                                            </div>
                                            <div className="margin-top-2">
                                                <div className="collections__description">{product.name}</div>
                                                <div className="margin-top-1 collections__price">${product.price}</div>
                                            </div>
                                        </a>
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
