import {Link} from "react-router-dom";
import React from "react";
import './CategoriesSlide.css';

const CategoriesSlide = (props) => {
    const { items: categories } = props;
    return (
        <ul className="category__grid" >
            {
                categories.map(category => (
                    <li key={category.id} className="category__grid-item">
                        <div className="category__grid-img-container">
                            <Link to="/collections/brooches/1">
                                <img  className="category__grid-img" src={category.image} />
                            </Link>
                        </div>
                        <h2>{category.name}&nbsp;<mark>({category.qty})</mark></h2>
                    </li>
                ))
            }
        </ul>
    );
}

export default CategoriesSlide;
