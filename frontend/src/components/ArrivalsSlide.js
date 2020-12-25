import {Link} from "react-router-dom";
import React from "react";

const ArrivalsSlide = (props) => {
    const { items: products } = props;
    return (
        <ul className="grid grid-col-4" >
            {
                products.map(({name, _id, thumbnail, price}) => (
                    <li key={_id} className="full-width">
                        <div className="slide-img-wrap">
                            <Link to={`/product/${_id}`}>
                                <img  alt={name} className="img-dull" src={thumbnail} />
                            </Link>
                        </div>
                        <div className="row bottom margin-bottom-2">
                            <div>
                                <p className="slide-caption">{name}</p>
                                <h5>${price.toFixed(2)}</h5>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}

export default ArrivalsSlide;
