import {Link} from "react-router-dom";
import React from "react";
import './CategoriesSlide.css';

const CategoriesSlide = (props) => {
    const { items } = props;
    return (
        <ul className="category__grid" >
            {
               items.map(({ product, category, count }) => {
                    const { _id, image } = product;
                    const { name, slug } = category;
                    return (
                        <li key={_id} className="category__grid-item">
                            <div className="category__grid-img-container">
                                <Link to={`/products/${slug}/1`}>
                                    <img alt={name} className="category__grid-img" src={image}/>
                                </Link>
                            </div>
                            <h2>{name}&nbsp;
                                <mark>({ count })</mark>
                            </h2>
                        </li>);
                })
            }
        </ul>
    );
}

export default CategoriesSlide;
