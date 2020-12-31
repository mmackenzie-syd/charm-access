import React, { Fragment } from 'react';
import {Link} from "react-router-dom";
import "./Breadcrumb.css";

function Breadcrumb(props) {
    const { list, show } = props;
    const maxIndex = list.length - 1;
    if (!show) {
        return <Fragment></Fragment>;
    }
    return (
        <ul className="breadcrumb">
            {
                list.reduce((arr, item, index) => {
                    arr.push(
                        <li
                            key={`breadcrumb-${index}`}
                            className={`breadcrumb-item ${(index === maxIndex) ? 'font-grey' : ''}`}
                        >
                            {
                                index < maxIndex
                                    ? <Link to={item.url}>{item.name}</Link>
                                    : item.name
                            }
                        </li>);
                        if (index < maxIndex) {
                            arr.push(<li key={`backslash-${index}`}  className="breadcrumb-item">/</li>);
                        }
                        return arr;
                }, [])
            }
        </ul>
    );
}

export default Breadcrumb;
