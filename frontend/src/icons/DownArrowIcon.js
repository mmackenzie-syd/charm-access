import React from "react";

function DownArrowIcon(props) {
    const width = props.width || '2.4rem';
    const height = props.height || '2.4rem';
    const offset = props.offset || 0;
    const className = props.className || '';
    return (
        <span className={className}>
            <svg
                width={width}
                height={height}
                style={{
                    transform: `translate(0, ${offset})`
                }}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 24 24"
                xmlSpace="preserve"
            >
                <g>
                    <path d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z"/>
                </g>
              </svg>
        </span>
    );
}

export default DownArrowIcon;
