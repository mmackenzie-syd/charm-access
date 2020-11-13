import {Link} from "react-router-dom";
import React from "react";
import './ArrivalsImage.css';

const ArrivalsImage = (props) => {
    const { items: arrivals } = props;
    return (
        <ul className="arrivals__grid" >
            {
                arrivals.map(arrival => (
                    <li key={arrival._id} className="arrivals__grid-item">
                        <div className="arrivals__grid-img-container">
                            <Link to="">
                                <img  className="arrivals__grid-img" src={arrival.thumbnail} />
                            </Link>
                        </div>
                        <h2>{arrival.name}</h2>
                        <p className="price">${arrival.price}</p>
                    </li>
                ))
            }
        </ul>
    );
}

export default ArrivalsImage;
