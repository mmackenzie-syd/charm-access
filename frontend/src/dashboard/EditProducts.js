import React, {useEffect} from 'react';
import './EditProducts.css';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {getProducts} from "../state/apiActions";
import { Link } from "react-router-dom";
import Quantity from "../components/Quantity";
import Paginator from "../components/Paginator";
import Breadcrumb from "../components/Breadcrumb";

function EditProducts(props) {
    const dispatch = useDispatch();
    const curPage = Number(props.match.params.page);

    const productsApi = useSelector(state => state.productsApi);
    const { loading: isLoadingProducts, errorProducts, data } = productsApi;

    const products = data ? data.products : [];
    const pages = data ? data.pages : 0;

    console.log('curPage', curPage)

    useEffect(() => {
        dispatch(getProducts('shop', curPage));
    }, [dispatch, 'shop', curPage]);

    const list = [];
    let showBreadcrumb = false;

    if (curPage) {
        list.push({
            name: 'Home Page',
            url: '/'
        });
        list.push({
            name: 'dashboard',
            url: ''
        });
        list.push({
            name: 'products',
            url: ''
        });
        list.push({
            name: curPage,
            url: ''
        });
        showBreadcrumb = true;
    }

    console.log('list', list)


    const url=`/dashboard/products`;

    let history = useHistory();

    const handlePageClick = (page) => {
        history.push(`${url}/${page}`);
    }

    const handleLeftPageClick = () => {
        if ((curPage - 1) > 0) {
            history.push(`${url}/${curPage - 1}`);
        }
    }

    const handleRightPageClick = () => {
        if ((curPage + 1) <= pages) {
            history.push(`${url}/${curPage + 1}`);
        }
    }

    return (
        <div className="products">
            <section className="row margin-bottom-1">
                <Breadcrumb list={list} show={showBreadcrumb}/>
                <div className="collections__page-numbers">
                    { (pages > 0)
                        ? <div>
                            <span>Page</span>
                            <span className="fixed-width-ch">{curPage}</span>
                            <span>of {pages}</span>
                        </div>
                        : <span>&nbsp;</span>
                    }
                </div>
            </section>
            <section className="row margin-bottom-1 margin-top-1" style={{height: '5rem'}} >
                <h3 className="">Products</h3>
                <div>
                    <Paginator
                        pages={pages}
                        curPage={curPage}
                        pageClick={handlePageClick}
                        leftPageClick={handleLeftPageClick}
                        rightPageClick={handleRightPageClick}
                    />
                </div>
            </section>
            <section className="row">
                <table className="products-table">
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Sku</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th style={{paddingLeft: '30px'}}>Inventory</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products && products.map(({_id, thumbnail, price, inventory, name }, index) =>{
                            //var    sku = 'Sku: ' + item._id.substr(-8, 8).toUpperCase(); // for display only.
                            const sku = _id.substr(-8, 8).toUpperCase(); // for display only.
                            return(
                                <tr key={ index }>
                                    <td>
                                        <div className="products-table-image-container">
                                            <img src={thumbnail} alt="" width="100" height="100" />
                                        </div>
                                    </td>
                                    <td>
                                        { sku }
                                    </td>
                                    <td>
                                        { name }
                                    </td>
                                    <td>
                                        {`$${price.toFixed(2)}`}
                                    </td>
                                    <td>
                        <span className="products-table-spinner">
                            <Quantity
                                value={1}
                                onSubBtn={() => {}}
                                onPlusBtn={() => {}}
                            />
                        </span>
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/product/${_id}`}>
                                            <span className="products-table-link">Edit</span>
                                        </Link>
                                    </td>
                                    <td>
                                        <span className="products-table-link" >Delete</span>
                                    </td>
                                </tr>);
                        })
                    }
                    </tbody>
                </table>
            </section>
            <section className="margin-top-1 margin-bottom-1">

            </section>
            <section className="margin-top-1 margin-bottom-5">
                <div className="row">
                    <div className="col-3"></div>
                    <div>
                        { (pages > 0)
                            ? <span className="">Page {curPage} of {pages}</span>
                            : <span>&nbsp;</span>
                        }
                    </div>
                    <button className="col-3 save-btn margin-left-1" type="submit">Create</button>
                </div>
            </section>
        </div>);
}

export default EditProducts;
