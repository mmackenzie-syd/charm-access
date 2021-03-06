import React from "react";

function PlusIcon(props) {
    const width = props.width || '2.4rem';
    const height = props.height || '2.4rem';
    const offset = props.offset || 0;
    const className = props.className || '';
    return (
        <span className={className}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width={width}
                height={height}
                offset={offset}
                x="0px"
                y="0px"
                viewBox="0 0 349.03 349.031"
                xmlSpace="preserve"
            >
                <g>
                    <path d="M349.03,141.226v66.579c0,5.012-4.061,9.079-9.079,9.079H216.884v123.067c0,5.019-4.067,9.079-9.079,9.079h-66.579   c-5.009,0-9.079-4.061-9.079-9.079V216.884H9.079c-5.016,0-9.079-4.067-9.079-9.079v-66.579c0-5.013,4.063-9.079,9.079-9.079   h123.068V9.079c0-5.018,4.069-9.079,9.079-9.079h66.579c5.012,0,9.079,4.061,9.079,9.079v123.068h123.067   C344.97,132.147,349.03,136.213,349.03,141.226z"/>
                </g>
            </svg>
        </span>
    );
}

export default PlusIcon;



