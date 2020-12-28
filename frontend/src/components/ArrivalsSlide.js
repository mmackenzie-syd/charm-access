import {useHistory} from "react-router-dom";
import React from "react";
import {useDispatch} from "react-redux";
import {setProductsNew} from "../state/nonApiActions";

const ArrivalsSlide = (props) => {
    const dispatch = useDispatch();
    const { items: products } = props;
    const history = useHistory();

    const handleClick = (index) => {
        const name = products[index].name;
        setProductsNew(products, dispatch);
        history.push(`/product/new/${name}`)
    }
    return (
        <ul className="grid grid-col-4">
            {
                products.map(({name, _id, thumbnail, price}, index) => {
                    return (
                        <li key={_id} className="full-width">
                            <div className="slide-img-wrap" onClick={() => handleClick(index)}>
                                <img  alt={name} className="img-dull" src={thumbnail} />
                            </div>
                            <div className="row bottom margin-bottom-2">
                                <div>
                                    <p className="slide-caption">{name}</p>
                                    <h5>${price.toFixed(2)}</h5>
                                </div>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default ArrivalsSlide;
