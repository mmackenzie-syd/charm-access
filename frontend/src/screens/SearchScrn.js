import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import './SearchScrn.css';
import Loading from "../components/Loading";
import Breadcrumb from "../components/Breadcrumb";
import Paginator from "../components/Paginator";
import placeholder from './placeholder-grey.png';
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import { getSearchState } from "../state/apiActions";
import {clearSearchState} from "../state/nonApiActions";

function SearchScrn(props) {
    let history = useHistory();
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    const curPage = Number(props.match.params.page);
    const curSearchValue = props.match.params.search;

    const searchApi = useSelector(state => state.searchApi);
    const { loading: isLoading, error, data } = searchApi;

    const products = data ? data.products : [];
    const pages = data ? data.pages : 0;

    useEffect(() => {
        if (curPage && curSearchValue) {
            dispatch(getSearchState(curSearchValue, curPage));
        }
    }, [curPage, curSearchValue]);

    const list = [{ name: 'Home Page', url: '/' }, { name: 'Search', url: '' }];
    let showBreadcrumb = false;
    showBreadcrumb = true;

    const fixedHeight = (isLoading && !products) ? '700px' : 'auto';

    const handlePageClick = (page) => {
       // history.push(`/products/${categorySlug}/${page}`);
    }

    const handleLeftPageClick = () => {
       if ((curPage - 1) > 0) {
           history.push(`/search/${curSearchValue}/${curPage - 1}`);
       }
    }

    const handleRightPageClick = () => {
       if ((curPage + 1) <= pages) {
            history.push(`/search/${curSearchValue}/${curPage + 1}`);
       }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchValue && searchValue !== '') {
            clearSearchState(dispatch);
            history.push(`/search/${searchValue}/${1}`);
        }
    }

    const clearSearch = (e) => {
        e.preventDefault();
        clearSearchState(dispatch);
        history.push('/search')
        setSearchValue('');
    }

    return (
        <main style={{height: fixedHeight}}>

            { /* isLoading &&
            <Loading isLoading={isLoading} />
           */ }

            <section className="row products-header margin-bottom-1">
                <Breadcrumb list={list} show={showBreadcrumb}/>
                <div className="products-header-page-numbers">
                    { (pages > 0)
                        ? <div>
                            <span>Page</span>
                            <span className="fixed-width-page-number">{curPage}</span>
                            <span>of {pages}</span>
                        </div>
                        : <span>&nbsp;</span>
                    }
                </div>
            </section>
            <section className="row top margin-bottom-1" style={{height: '5rem'}} >
                <form className="search-form row"  onSubmit={handleSearch}>
                    <div className="search-term-wrap">
                        <input
                            className="search-term"
                            type="text"
                            placeholder="Search..."
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                        />
                        <span className="search-clear" onClick={clearSearch}>&#10005;</span>
                    </div>
                    <button type='submit' className="btn btn-primary btn-small search-btn">SEARCH</button>
                </form>

                <div className="search-desktop">
                    <Paginator
                        pages={pages}
                        curPage={curPage}
                        pageClick={handlePageClick}
                        leftPageClick={handleLeftPageClick}
                        rightPageClick={handleRightPageClick}
                    />
                </div>
            </section>
            <ul className="grid grid-col-2-small grid-col-4-large">
                {
                    products && products.map(({ name, _id, thumbnail, price }, index) =>
                        <li key={_id} className="full-width">
                            <div className="slide-img-wrap" >
                                <Link to={`/product/shop/${name}`}>
                                    <img alt="placeholder" src={placeholder} />
                                    { !isLoading &&
                                    <img  alt={name} className="img-dull products-img fade-in" src={thumbnail} />
                                    }
                                </Link>
                            </div>
                            <div className="row bottom margin-bottom-2">
                                <div>
                                    <p className="slide-caption">{name}</p>
                                    <h5>${price.toFixed(2)}</h5>
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul>

            {
            <section className="margin-top-1 margin-bottom-5">
                <div className="search-mobile">
                    <div className="row center">
                        <Paginator
                            pages={pages}
                            curPage={curPage}
                            pageClick={handlePageClick}
                            leftPageClick={handleLeftPageClick}
                            rightPageClick={handleRightPageClick}
                        />
                    </div>
                </div>
                <div className="search-desktop">
                    <div className="row center">
                        { (pages > 0)
                            ? <span>Page {curPage} of {pages}</span>
                            : <span>&nbsp;</span>
                        }
                    </div>
                </div>
            </section>
            }
        </main>

    );
}

export default SearchScrn;
