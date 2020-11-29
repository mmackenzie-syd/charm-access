import React from "react";

function CrossIcon(props) {
    const width = props.width || '2.4rem';
    const height = props.height || '2.4rem';
    const offset = props.offset || 0;
    const className = props.className || '';
    return (
        <span className={className}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width={width}
                height={height}
                x="0px"
                y="0px"
                viewBox="0 0 490 490"
            >
            <polygon points="386.813,0 245,141.812 103.188,0 0,103.188 141.813,245 0,386.812 103.187,489.999 245,348.187 386.813,490   490,386.812 348.187,244.999 490,103.187 "/>
            </svg>
        </span>
    );
}

export default CrossIcon;


