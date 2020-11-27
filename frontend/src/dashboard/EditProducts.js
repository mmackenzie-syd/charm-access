import React, {Fragment, useEffect, useState} from 'react';
import './EditProducts.css';

function EditProducts(props) {
    const products = [];

    return (
        <div className="row products">
            <div className="lg-col-span-12 products-header">
                <h2>Products</h2>
                <button className="products-header-btn">CREATE</button>
                <div className="clear"></div>
                <div className="products-header-divider"></div>
            </div>
            <div className="lg-col-span-12">
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
                        products && products.map((item, index) =>{
                            //var    sku = 'Sku: ' + item._id.substr(-8, 8).toUpperCase(); // for display only.
                            var sku = item._id.substr(-8, 8).toUpperCase(); // for display only.
                            return(
                                <tr key={ index }>
                                    <td>
                                        <div className="products-table-image-container">
                                            <img src="" alt="" width="100" height="100" />
                                        </div>
                                    </td>
                                    <td>
                                        { sku }
                                    </td>
                                    <td>
                                        { item.name }
                                    </td>
                                    <td>
                                        {'$' + item.price.toFixed(2) }
                                    </td>
                                    <td>
                        <span className="products-table-spinner">
                            <span className="products-table-sub">-</span>
                            <span className="products-table-inventory">{ item.inventory }</span>
                            <span className="products-table-add">+</span>
                        </span>
                                    </td>
                                    <td>
                                        <span className="products-table-link">Edit</span>
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
