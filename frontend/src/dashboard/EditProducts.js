import React, {useEffect} from 'react';
import './EditProducts.css';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {getProducts} from "../state/apiActions";
import { Link } from "react-router-dom";

function EditProducts(props) {
    const dispatch = useDispatch();
    const curPage = Number(props.match.params.page);

    const productsApi = useSelector(state => state.productsApi);
    const { loading: isLoadingProducts, errorProducts, data } = productsApi;

    const products = data ? data.products : [];

    useEffect(() => {
        dispatch(getProducts('shop', curPage));
    }, [dispatch, 'shop', curPage]);


    return (
        <div className="products">
            <div className="row products-header">
                <h2>Products</h2>
                <button className="products-header-btn">Create</button>
            </div>
            <div className="row">
                <table className="products-table">
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Sku</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Inventory</th>
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
                            <span className="products-table-sub">-</span>
                            <span className="products-table-inventory">{inventory}</span>
                            <span className="products-table-add">+</span>
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
            </div>
        </div>);
}

export default EditProducts;
