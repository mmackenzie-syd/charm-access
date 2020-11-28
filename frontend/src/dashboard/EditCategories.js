import React, {Fragment, useEffect, useState} from 'react';
import './EditCategories.css';
import {useSelector} from "react-redux";

function EditCategories(props) {

    const categoriesApi = useSelector(state => state.categoriesApi);
    const { data: categories } = categoriesApi;

    return (
            <div className="categories margin-bottom-5">
                <header className="row categories-header space-between">
                        <h2 className="col-6">Categories</h2>
                    <button
                        className="col-3 save-btn margin-left-1"
                        type="button"
                    >
                        Create
                    </button>
                </header>
                <article className="row">
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
                                        <span className="products-table-link">Edit</span>
                                    </td>
                                    <td>
                                        <span className="products-table-link">Delete</span>
                                    </td>
                                </tr>)
                        })
                        }
                        </tbody>
                    </table>
                </article>
            </div>);
}

export default EditCategories;
