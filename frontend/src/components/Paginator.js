import React from 'react';
import './Paginator.css';
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";

function Paginator(props) {
    const { curPage, pages } = props;
    const pagesArray = (pages === 0) ? [] : [...Array(pages).keys()].map(key => key + 1);
    const perDisplay = 3;
    const maxPage = pagesArray.length;

    const handleLeftPageClick = () => {
        props.leftPageClick();
    }

    const handleRightPageClick = () => {
        props.rightPageClick();
    }
    const handlePageClick = (page) => {
        props.pageClick(page)
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

    let leftArrowDisabled = (curPage === 1) ? 'leftArrowDisabled' : '';
    let rightArrowDisabled = (curPage === maxPage) ? 'rightArrowDisabled' : '';

    const pagesToDisplay = (pages === 0) ? [] : pagesArray.slice((startPage - 1), endPage);

    return (
        <div className="pagination margin-bottom-1">
            { pagesToDisplay.length > 1 &&
                <button className={`page-btn ${leftArrowDisabled}`}  onClick={handleLeftPageClick}>
                    <LeftArrowIcon
                        width={'1.2rem'}
                        height={'1.2rem'}
                        offset={'.3rem'}
                    />
                </button>
            }
            {   pagesToDisplay.length > 1 &&
                pagesToDisplay.map((page) => {
                    const active = (page === Number(curPage)) ? 'active' : '';
                    return (
                        <button className={`page-btn ${active}`} onClick={() => handlePageClick(page)}>
                            {page}
                        </button>)})
            }
            { pagesToDisplay.length > 1 &&
                <button className={`page-btn ${rightArrowDisabled}`} onClick={handleRightPageClick}>
                    <RightArrowIcon
                        width={'1.2rem'}
                        height={'1.2rem'}
                        offset={'.3rem'}
                    />
                </button>
            }
        </div>
    );
}

export default Paginator;
