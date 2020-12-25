import React, { Fragment } from 'react';
import {Link} from "react-router-dom";

function Breadcrumb(props) {
    const { list, show } = props;
    const maxIndex = list.length - 1;
    if (!show) {
        return <Fragment></Fragment>;
    }
    return (
        <ul>
            {
                list.reduce((arr, item, index) => {
                    arr.push(
                        <li
                            key={`breadcrumb-${index}`}
                            className={`inline font-small margin-right-1 ${(index === maxIndex) ? 'font-grey' : ''}`}
                        >
                            {
                                index < maxIndex
                                    ? <Link to={item.url}>{item.name}</Link>
                                    : item.name
                            }
                        </li>);
                        if (index < maxIndex) {
                            arr.push(<li key={`backslash-${index}`}  className="inline font-small margin-right-1">/</li>);
                        }
                        return arr;
                }, [])
            }
        </ul>
    );
}

export default Breadcrumb;
