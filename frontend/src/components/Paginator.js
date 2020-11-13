import React from 'react';
import {useHistory} from "react-router";
import './Paginator.css';
import LeftArrowIcon from "../icons/LeftArrowIcon";
import {Link} from "react-router-dom";
import RightArrowIcon from "../icons/RightArrowIcon";

function Paginator(props) {
    const { curPage, pages, url } = props;
    const pagesArray = (pages === 0) ? [] : [...Array(pages).keys()].map(key => key + 1);
    const perDisplay = 3;
    const maxPage = pagesArray.length;
    let history = useHistory();

    const handleLeftPageClick = () => {
        if ((curPage - 1) > 0) {
            history.push(`${url}/${curPage - 1}`);
        }
    }

    const handleRightPageClick = () => {
        if ((curPage + 1) <= maxPage) {
            history.push(`${url}/${curPage + 1}`);
        }
    }

    let startPage = Math.floor((curPage -1) / perDisplay) * perDisplay + 1;
    let endPage = startPage  + perDisplay - 1;

    if ((startPage + perDisplay) > maxPage) {
        startPage = curPage - perDisplay + 1;
        endPage = curPage;
    }

    if (maxPage < perDisplay) {
        startPage = 1;
        endPage = maxPage;
    }

    let leftArrowClass = (curPage === 1) ? 'slider_control icon-arrow icon-arrow-disabled' : 'slider_control icon-arrow';
    let rightArrowClass = (curPage === maxPage) ? 'slider_control icon-arrow icon-arrow-disabled' : 'slider_control icon-arrow';

    const pagesToDisplay = (pages === 0) ? [] : pagesArray.slice((startPage - 1), endPage);

    return (
        <div className="pagination margin-bottom-1">
            { pagesToDisplay.length > 1 &&
                <span onClick={handleLeftPageClick}>
                    <LeftArrowIcon
                        className={leftArrowClass}
                        width={'1.2rem'}
                        height={'1.2rem'}
                        offset={'.3rem'}
                    />
                </span>
            }
            {   pagesToDisplay.length > 1 &&
            pagesToDisplay.map((page) => {
                const active = (page === Number(curPage)) ? 'active' : '';
                return <Link key={page} to={`${url}/${page}`} className={active}>{page}</Link>
            })
            }
            { pagesToDisplay.length > 1 &&
                <span onClick={handleRightPageClick}>
                    <RightArrowIcon
                        className={rightArrowClass}
                        width={'1.2rem'}
                        height={'1.2rem'}
                        offset={'.3rem'}
                    />
                </span>
            }
        </div>
    );
}

export default Paginator;
