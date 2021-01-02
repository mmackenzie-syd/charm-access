import React from 'react';
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";

function Paginator(props) {
    const { curPage, pages, leftPageClick, rightPageClick, pageClick } = props;
    const pagesArray = (pages === 0) ? [] : [...Array(pages).keys()].map(key => key + 1);
    const perDisplay = 3;
    const maxPage = pagesArray.length;

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

    let leftArrowDisabled = (curPage === 1) ? 'btn-disabled' : '';
    let rightArrowDisabled = (curPage === maxPage) ? 'btn-disabled' : '';

    let pagesToDisplay = (pages === 0) ? [] : pagesArray.slice((startPage - 1), endPage);

    if (pages === 3) {
        pagesToDisplay = pagesArray;
    }

    return (
        <div className="pagination margin-bottom-1">
            { pagesToDisplay.length > 1 &&
            <button className={`btn btn-icon btn-secondary ${leftArrowDisabled}`}  onClick={leftPageClick}>
                <LeftArrowIcon
                    width={'1.2rem'}
                    height={'1.2rem'}
                    offset={'.3rem'}
                />
            </button>
            }
            {   pagesToDisplay.length > 1 &&
            pagesToDisplay.map((page) => {
                const active = (page === Number(curPage)) ? 'btn-active' : '';
                return (
                    <button key={page} className={`btn btn-secondary btn-icon ${active}`} onClick={() => pageClick(page)}>
                        {page}
                    </button>)})
            }
            { pagesToDisplay.length > 1 &&
            <button className={`btn btn-secondary btn-icon ${rightArrowDisabled}`} onClick={rightPageClick}>
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
