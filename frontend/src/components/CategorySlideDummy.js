import React from "react";

import "./CategorySlideDummy.css";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
const dummyCategoryData = [
    "/images/largeplaceholder.png",
    "/images/largeplaceholder.png",
    "/images/largeplaceholder.png",
];

const CategorySlideDummy = () => {
    return (
        <div className="category-dummy fade-out">
            <div className="row  margin-bottom-1">
                <h3 className="margin-bottom-2">By Category</h3>
                <div>
                    <button className='btn btn-icon btn-secondary'>
                        <LeftArrowIcon
                            width={'1.2rem'}
                            height={'1.2rem'}
                            offset={'.3rem'}
                        />
                    </button>
                    <button className='btn btn-icon btn-secondary'>
                        <RightArrowIcon
                            width={'1.2rem'}
                            height={'1.2rem'}
                            offset={'.3rem'}
                        />
                    </button>
                </div>
            </div>
            <ul className="grid grid-col-3" >
                {
                    dummyCategoryData.map((image, index) => {
                        return (
                            <li key={index}>
                                <div className="slide-img-wrap">
                                        <img alt="blank" className="dummy-category-img" src={image}/>
                                </div>
                                <p className="slide-caption category-dummy-caption">&nbsp;</p>
                            </li>);
                    })
                }
            </ul>
        </div>
    );
}

export default CategorySlideDummy;
