import {Link} from "react-router-dom";
import React from "react";
import './ArrivalsSlide.css'

const ArrivalsSlide = (props) => {
    const { items: products } = props;
    return (
        <ul className="arrivals__grid" >
            {
                products.map(({name, _id, thumbnail, price}) => (
                    <li key={_id} className="arrivals__grid-item">
                        <div className="arrivals__grid-img-container">
                            <Link to={`/product/${_id}`}>
                                <img  alt={name} className="arrivals__grid-img" src={thumbnail} />
                            </Link>
                        </div>
                        <div className="row bottom margin-bottom-2">
                            <div>
                                <h2>{name}</h2>
                                <p className="price">${price.toFixed(2)}</p>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}

export default ArrivalsSlide;
