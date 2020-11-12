import React from "react";
import './Slide.css';

const Slide = (props) => {
    const x = props.x ? props.x : 0;
    const i = props.i ? props.i : 0;
    const width = props.width ? props.width : 0;
    return (
        <div className="slide" style={{left: `${x}px`, top: '0px', width: `${width}px`}}>
            {props.children}
        </div>
    );
};
export default Slide;
