import React from 'react';
import {useHistory} from "react-router";
import './Paginator.css';
import LeftArrowIcon from "../icons/LeftArrowIcon";
import {Link} from "react-router-dom";
import RightArrowIcon from "../icons/RightArrowIcon";

// url = `/collections/${categorySlug}
function Paginator(props) {
    const { curPage, pages, url } = props;

    let history = useHistory();

    const handleLeftPageClick = () => {
        if ((Number(curPage) - 1) > 0) {
            history.push(`${url}/${Number(curPage) - 1}`);
        }
    }

    const handleRightPageClick = () => {
        if ((Number(curPage) + 1) <= pages.length) {
            history.push(`${url}/${Number(curPage) + 1}`);
        }
    }

    return (
        <div className="pagination margin-bottom-1">
            { pages.length > 1 &&
            <span onClick={handleLeftPageClick}>
                            <LeftArrowIcon
                                className={'slider_control icon-arrow white-background'}
                                width={'1.2rem'}
                                height={'1.2rem'}
                                fill={'#9192a3'}
                                offset={'.3rem'}
                            />
                        </span>
            }
            {   pages.length > 1 &&
            pages.map((page) => {
                const active = (page === Number(curPage)) ? 'active' : '';
                return <Link key={page} to={`${url}/${page}`} className={active}>{page}</Link>
            })
            }
            { pages.length > 1 &&
            <span onClick={handleRightPageClick}>
                            <RightArrowIcon
                                className={'slider_control icon-arrow white-background'}
                                width={'1.2rem'}
                                height={'1.2rem'}
                                fill={'#9192a3'}
                                offset={'.3rem'}
                            />
                        </span>
            }
        </div>
    );
}

export default Paginator;
