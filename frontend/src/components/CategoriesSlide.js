import {Link} from "react-router-dom";
import React from "react";
import './CategoriesSlide.css';

const CategoriesSlide = (props) => {
    const { items: products } = props;
    return (
        <ul className="category__grid" >
            {
                products.map(({name, image, qty, id}) => (
                    <li key={id} className="category__grid-item">
                        <div className="category__grid-img-container">
                            <Link to="/collections/brooches/1">
                                <img alt={name} className="category__grid-img" src={image} />
                            </Link>
                        </div>
                        <h2>{name}&nbsp;<mark>({qty})</mark></h2>
                    </li>
                ))
            }
        </ul>
    );
}

export default CategoriesSlide;
