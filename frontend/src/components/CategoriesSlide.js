import {Link} from "react-router-dom";
import React from "react";

const CategoriesSlide = (props) => {
    const { items } = props;
    return (
        <ul className="grid grid-col-3-large" >
            {
                items.map(({ product, category, count }) => {
                    const { _id, image } = product;
                    const { name, slug } = category;
                    return (
                        <li key={_id}>
                            <div className="slide-img-wrap">
                                <Link to={`/products/${slug}/1`}>
                                    <img alt={name} className="img-dull" src={image}/>
                                </Link>
                            </div>
                            <p className="slide-caption">{name}&nbsp;
                                <mark>({ count })</mark>
                            </p>
                        </li>);
                })
            }
        </ul>
    );
}

export default CategoriesSlide;
