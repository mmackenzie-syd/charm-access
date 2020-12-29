import React from "react";
import "./CategorySlideDummy.css";

export default () =>
        <div className="category-dummy fade-out">
            <ul className="grid grid-col-3-large" >
                {
                    [1, 2, 3].map((image, index) => {
                        return (
                            <li key={index}>
                                <div className="slide-img-wrap">
                                    <img
                                        alt="blank"
                                        className="dummy-category-img"
                                        src="/images/largeplaceholder.png"
                                    />
                                </div>
                                <p className="slide-caption">&nbsp;</p>
                            </li>);
                    })
                }
            </ul>
        </div>;
