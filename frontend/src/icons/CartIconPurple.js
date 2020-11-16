import React from "react";

function CartIconPurple(props) {
    const width = props.width || '2.4rem';
    const height = props.height || '2.4rem';
    const offset = props.offset || 0;
    const className = props.className || '';
    return (
        <span className={className}>
            <svg
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={width}
                height={height}
                style={{
                    transform: `translate(0, ${offset})`,
                    verticalAlign: 'middle'
                }}
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                xmlSpace="preserve"
            >
            <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                <rect
                    x="1500"
                    y="-4450"
                    width="7000"
                    height="7200"
                />
                <path
                    d="M4741.9,5005.8
                c-993-76.4-1845.7-889.8-2019.1-1928.2
                l-26.8-154.8
                l-615.2-10.3
                l-615.2-10.3
                l-49.5-57.8
                l-49.5-57.8
                V-933.8
                c0-3493.1,2.1-3722.3,37.2-3763.6
                c18.6-24.8,55.7-55.7,80.5-68.1
                c66.1-33,6961.5-33,7033.7,2.1
                c123.9,55.7,115.6-220.9,115.6,3825.5
                c0,2347.3-6.2,3720.2-18.6,3745
                c-51.6,92.9-61.9,95-699.8,105.3
                l-609,10.3
                l-45.4,227.1
                c-101.2,495.5-334.5,918.7-701.9,1265.5
                c-301.4,287-640,468.6-1021.9,551.2
                C5398.4,4995.4,4923.5,5020.2,4741.9,5005.8
                z M5557.4,4520.6
                c631.7-159,1123.1-693.7,1269.7-1387.3
                c16.5-78.5,31-159,31-181.7
                c0-39.2-35.1-39.2-1858-39.2s-1858,0-1858,39.2
                c0,22.7,14.5,103.2,31,181.7
                c169.3,794.8,774.2,1364.6,1517.4,1428.6
                C4966.9,4584.6,5379.8,4566,5557.4,4520.6
                z
                M2687.7,2065.9
                V1653
                v412.9v412.9
                v-412.9V1653
                v412.9v412.9
                H7756h443.9
                V-937.9v-3416.7
                h-3200H1800
                v3416.7
                v3416.7
                h443.9
                h443.9
                V2065.9
                z"
                />
            </g>
            </g>
            </svg>
        </span>
    );
}

export default CartIconPurple;
