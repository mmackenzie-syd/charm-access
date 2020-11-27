import React, {Fragment, useEffect, useState} from 'react';
import './EditProduct.css';

function EditProduct(props) {
    const categories = [];
    return (
        <div className="product">
            <div className="row">
                <header className="lg-col-span-12 product-header">
                    <h2>Edit Product</h2>
                    <div className="clear"></div>
                    <div className="product-header-divider"></div>
                </header>
            </div>
            <div className="row">
                <form id="formEdit">
                    <article className="lg-col-span-7 product-article">
                        <div className="row">
                            <div className="product-article-group lg-col-span-12">
                                <label>Product Name</label>

                                <input type="text" className="product-article-control"  />
                            </div>
                            <div className="product-article-group lg-col-span-12">
                                <label>Description</label>
                                <textarea name="message" className="product-article-control" rows={8} ></textarea>
                            </div>
                            <div className="product-article-group lg-col-span-12" >
                                <label>Category</label>
                                <select name="category" className="product-article-control" >
                                    <option key={ 0 } value="none">none set</option>
                                    {
                                        categories && categories.map((item, index) => {
                                            return(
                                                <option key={ index + 1 } value={ item.name }>{ item.name }</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="product-article-group lg-col-span-4" >
                                <label>$ Price</label>
                                <input type="text" className="product-article-control" />
                            </div>
                            <div className="product-article-group lg-col-span-4" >
                                <label>$ Sale Price</label>
                                <input type="text" className="product-article-control" ></input>
                            </div>
                            <div className="product-article-group lg-col-span-4" >
                                <label className="product-article-group-inventory">Inventory</label>
                                <div className="product-article-spinner">
                                    <span className="product-article-sub">-</span>
                                    <input type="number" />
                                    <span className="product-article-add">+</span>
                                </div>
                            </div>
                        </div>
                    </article>
                    <aside className="lg-col-span-5 product-aside">
                        <h5 className="pull-right product-aside-btn"><i className="fa fa-plus" aria-hidden="true"></i> Add Image</h5>
                        <input id="selectedFile" type="file"  style={{display: 'none'}}  />
                        <div className="pull-right product-aside-image-container">
                            <img  alt="" width='385' height='385'/>
                        </div>
                    </aside>
                </form>
            </div>
            <div className="row">
                <footer className="lg-col-span-12 product-footer">
                    <div className="clear"></div>
                    <div className="product-footer-divider"></div>
                    <button className="product-footer-btn pull-right" type="submit" form="formEdit" value="Submit">SAVE</button>
                    <button className="product-footer-btn pull-right">CANCEL</button>
                </footer>
            </div>
        </div>);
}

export default EditProduct;
