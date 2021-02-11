import React, {useEffect, useReducer, useState} from 'react';
import './EditProducts.css';
import {useHistory} from "react-router";
import { Link } from "react-router-dom";
import Quantity from "../components/Quantity";
import Paginator from "../components/Paginator";
import Breadcrumb from "../components/Breadcrumb";
import {deleteProduct, updateInventory} from "../api/authApi";
import {getProducts} from "../api/unauthApi";

const  errorReducer = (error, type) => {
    switch (type) {
        case 'LOAD_PAGE_ERROR':
            return { loadPage: true}
        case 'DELETE_ERROR':
            return { deleteProduct: true }
        case 'UPDATE_ERROR':
            return { updateProduct: true }
        case 'RESET':
            return null
        default:
            return null;
    }
}

function EditProducts(props) {
    const curPage = Number(props.match.params.page);

    // toggle to re-render state
    const [updateState, setUpdateState] = useState(false);

    const [success, setSuccess] = useState(false );
    const [error, dispatch] = useReducer(errorReducer, null);

    const [data, setData] = useState([])

    const products = data ? data.products : [];
    let pages = data ? data.pages : 0;

    useEffect(() => {
        (async () => {
            try {
                const { data } = await getProducts(curPage);
                setData(data);
            } catch(error) {
                dispatch('LOAD_PAGE_ERROR');
            }
        })();
    }, [curPage]);

    let list = [];
    let showBreadcrumb = false;

    if (curPage) {
        list = [{ name: 'Home Page', url: '/' },
                { name: 'dashboard', url: '' },
                { name: 'products', url: '' },
                { name: curPage, url: '' }];
        showBreadcrumb = true;
    }
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

    const handleSubBtn = async (id, inventory) => {
        if ((inventory - 1) >= 0) {
            try {
                await updateInventory(id, inventory - 1);
                const product = products.find(product => (product._id === id));
                product.inventory = inventory - 1;
                setUpdateState(!updateState); // to trigger update
            } catch(error) {
                dispatch('UPDATE_ERROR');
            }
        }
    }

    const handlePlusBtn = async (id, inventory) => {
        try {
            await updateInventory(id, inventory + 1);
            const product = products.find(product => (product._id === id));
            product.inventory = inventory + 1;
            setUpdateState(!updateState); // to trigger update
        } catch(error) {
            dispatch('UPDATE_ERROR');
        }
    }

    const onCloseSuccess = async () => {
        if (curPage > Number(pages)) {
            history.push('/dashboard/products/1'); // go back to first page if deleted all on this page
        } else {
            const { data } = await getProducts(curPage);
            setData(data);
        }
        setSuccess(false);
    }

    const handleDelete = async (id) => {
        try {
            const { data } = await deleteProduct(id);
            pages = data.pages;
            setSuccess(true);
        } catch(error) {
          dispatch('DELETE_ERROR');
        }
    }

    const handleClose = () => {
        dispatch('RESET');
    }

    return (
        <main className="products">
            <section className="row products-header">
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
            { success &&
                <div className="edit-products-message-box">
                    <span onClick={onCloseSuccess} className="edit-products-message-box-close">&#10005;</span>
                    Product deleted
                </div>
            }
            { error &&
                <div className="edit-products-message-box edit-products-message-box-red">
                    <span onClick={handleClose} className="edit-products-message-box-close">&#10005;</span>
                    { error.deleteProduct &&
                        'Failed to delete product. Contact Administrator.'
                    }
                    { error.updateProduct &&
                        'Failed to update product. Contact Administrator.'
                    }
                    { error.loadPage &&
                        'Failed to load page.'
                    }
                </div>
            }

            <section className="row margin-bottom-1" style={{height: '5rem'}} >
                <h3>Products</h3>
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
                                value={inventory}
                                onSubBtn={() => handleSubBtn(_id, inventory)}
                                onPlusBtn={() => handlePlusBtn(_id, inventory)}
                            />
                        </span>
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/product/${_id}`}>
                                            <span className="products-table-link">Edit</span>
                                        </Link>
                                    </td>
                                    <td>
                                        <span
                                            className="products-table-link"
                                            onClick={e => handleDelete(_id)}
                                        >
                                            Delete
                                        </span>
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
                    <button
                        className="col-3 btn btn-secondary"
                        type="button"
                        onClick={() => history.push('/dashboard/createproduct')}
                    >
                        Add Product
                    </button>
                </div>
            </section>
        </main>);
}

export default EditProducts;
