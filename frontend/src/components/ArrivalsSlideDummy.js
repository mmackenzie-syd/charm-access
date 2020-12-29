import React from "react";
import "./ArrivalsSlideDummy.css";

export default () =>
        <div className="arrivals-dummy fade-out">
            <ul className="grid grid-col-4-large" >
                {
                    [1, 2, 3, 4].map((thumbnail, index) => (
                        <li key={index} className="full-width">
                            <div className="slide-img-wrap">
                                <img  alt="blank" className="arrivals-dummy-img" src="/images/placeholder.png" />
                            </div>
                            <div className="row bottom margin-bottom-2">
                                <div>
                                    <p className="slide-caption">&nbsp;</p>
                                    <h5 className="arrivals-dummy-price">&nbsp;</h5>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>;
