import React, {Fragment, useEffect, useState} from 'react';
import './EditCategory.css';
import {useSelector} from "react-redux";

function EditCategory(props) {
    const categoriesApi = useSelector(state => state.categoriesApi);
    const { data: categories } = categoriesApi;

    console.log('categories', categories)

    return (
        <div className="row">
            <div className="categories">
                <header className="lg-col-span-12 categories-header">
                    <h2>Categories</h2>
                    <button className="categories-header-btn">ADD</button>
                    <div className="clear"></div>
                    <div className="categories-header-divider"></div>
                </header>
                <article className="lg-col-span-12">
                    <table className="categories-article-table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        { categories && categories.map((item, index) => {
                            return(
                                <tr key={ index }>
                                    <td>
                                        { item.name }
                                    </td>
                                    <td>
                                        <span className="categories-article-table-link">Edit</span>
                                    </td>
                                    <td>
                                        <span className="categories-article-table-link" >Delete</span>
                                    </td>
                                </tr>)
                            })
                        }
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </article>
            </div>
        </div>);
}

export default EditCategory;
