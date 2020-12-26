import React from "react";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import "./ArrivalsSlideDummy.css";

const dummyArrivalsData = [
   "/images/placeholder.png",
    "/images/placeholder.png",
    "/images/placeholder.png",
    "/images/placeholder.png"
];

const ArrivalsSlideDummy = () => {
    return (
        <div className="arrivals-dummy fade-out">
            <ul className="grid grid-col-4" >
                {
                    dummyArrivalsData.map((thumbnail, index) => (
                        <li key={index} className="full-width">
                            <div className="slide-img-wrap">
                                <img  alt="blank" className="arrivals-dummy-img" src={thumbnail} />
                            </div>
                            <div className="row bottom margin-bottom-2">
                                <div>
                                    <p className="slide-caption arrivals-dummy-caption">&nbsp;</p>
                                    <h5 className="arrivals-dummy-price">&nbsp;</h5>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ArrivalsSlideDummy;
