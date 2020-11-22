import React from "react";

function BagIcon(props) {
    const fill = props.fill || '#111';
    const width = props.width || '2.4rem';
    const height = props.height || '2.4rem';
    const offset = props.offset || 0;
    const className = props.className || '';
    return (
        <span className={className}>
            <svg className="icon"
                 width={width}
                 height={height}
                 style={{
                     fill: fill,
                     transform: `translate(0, ${offset})`,
                     overflow: 'hidden',
                     verticalAlign: 'middle'
                 }}
                 viewBox="0 0 1024 1024"
                 version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
            ><path
            d="M384 32c0-53.019-42.981-96-96-96s-96 42.981-96 96c0 53.019 42.981 96 96 96s96-42.981 96-96zM1024 32c0-53.019-42.981-96-96-96s-96 42.981-96 96c0 53.019 42.981 96 96 96s96-42.981 96-96zM1024 448v384h-768c0 35.346-28.654 64-64 64h-192v-64h128l48.074-412.054c-29.294-23.458-48.074-59.5-48.074-99.946 0-70.696 57.308-128 128-128h768v64h-768c-35.346 0-64 28.654-64 64 0 0.218 0.014 0.436 0.016 0.656l831.984 127.344z" />
            </svg>
        </span>
    );
}

export default BagIcon;
