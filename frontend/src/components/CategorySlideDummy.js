import React from "react";

import "./CategorySlideDummy.css";
const dummyCategoryData = [
    "/images/largeplaceholder.png",
    "/images/largeplaceholder.png",
    "/images/largeplaceholder.png",
];

const CategorySlideDummy = () => {
    return (
        <div className="category-dummy fade-out">
            <ul className="grid grid-col-3" >
                {
                    dummyCategoryData.map((image, index) => {
                        return (
                            <li key={index}>
                                <div className="slide-img-wrap">
                                        <img alt="blank" className="dummy-category-img" src={image}/>
                                </div>
                                <p className="slide-caption">&nbsp;</p>
                            </li>);
                    })
                }
            </ul>
        </div>
    );
}

export default CategorySlideDummy;
