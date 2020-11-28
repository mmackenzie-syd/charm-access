import React, {Fragment, useEffect, useState} from 'react';
import './EditCategories.css';
import {useSelector} from "react-redux";
import PlusIcon from "../icons/PlusIcon";

function EditCategories() {

    const [category, setCategory] = useState({name: '', slug: ''})

    const categoriesApi = useSelector(state => state.categoriesApi);
    const { data: categories } = categoriesApi;

    const handleCategory = () => {

    };

    return (
            <div className="categories margin-bottom-5">
                <header className="row categories-header space-between">
                        <h2 className="col-6">Categories</h2>
                </header>
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
                    <div className="row top">
                        <input
                            type="text"
                            className="product-article-control"
                            placeholder="Enter category..."
                            value={category.name}
                            onChange={e => handleCategory(e.target.value)}
                        />
                        <button
                            className="plus-btn"
                            type="button"
                        >
                            <PlusIcon
                                width={'1.2rem'}
                                height={'1.2rem'}
                                className={'create-category'}
                            />
                        </button>
                    </div>

            </div>);
}

export default EditCategories;
