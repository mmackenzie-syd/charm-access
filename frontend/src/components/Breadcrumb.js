import React, { Fragment } from 'react';
import './Breadcrumb.css';
import {Link} from "react-router-dom";

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
                    arr.push(<li className={(index < maxIndex) ? "breadcrumb__item" : "breadcrumb__item breadcrumb__item--last" }>
                        {
                            index < maxIndex
                                ? <Link to={item.url}>{item.name}</Link>
                                : item.name
                        }
                    </li>);
                    if (index < maxIndex) {
                        arr.push(<li className="breadcrumb__item">/</li>);
                    }
                    return arr;
                }, [])
            }
        </ul>
    );
}

export default Breadcrumb;
