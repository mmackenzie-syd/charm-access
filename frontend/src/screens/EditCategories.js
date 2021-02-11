import React, {useEffect, useState} from 'react';
import './EditCategories.css';
import PlusIcon from "../icons/PlusIcon";
import {saveCategories} from "../api/authApi";
import {getCategories} from "../api/unauthApi";
import {useHistory} from "react-router";
import CrossIcon from "../icons/CrossIcon";

function EditCategories() {
    const history = useHistory();
    const [category, setCategory] = useState('')
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await getCategories();
                setCategories(data);
            } catch(error) {
                setError(true);
            }
        })();
    }, []);

    const handleCategories = (index, value) => {
        const slug = value.replace(/\s/g,'').toLowerCase();
        const newCategories = [...categories]
        newCategories[index] = { name: value, slug  };
        setCategories(newCategories);
    };

    const handleAddCategory = () => {
        const slug = category.replace(/\s/g,'').toLowerCase();
        const newCategories = [...categories]
        newCategories.push({ name: category, slug  });
        setCategories(newCategories);
        setCategory('')
    }

    const handleDelete = (name) => {
        const newCategories = categories.filter(category => (category.name !== name));
        setCategories(newCategories);
    }

    const handleSave = async () => {
        try {
            setLoading(true);
            const newCategories = categories.map(({ name, slug }) => ({ name, slug }));
            await saveCategories(newCategories);
            setLoading(false);
            history.goBack();
        } catch(error) {
            setError(true);
            setLoading(false);
        }
    }

    const handleClose = () => {
        setError(false);
    }

    return (
        <>
            { error &&
                <div className="edit-categories-message-box edit-categories-message-box-red margin-bottom-2">
                    <span onClick={handleClose} className="edit-categories-message-box-close">&#10005;</span>
                    An undefined error occurred. Try again or contact the administrator if the error persists.
                </div>
            }
            <div className="categories margin-bottom-5">

                { loading &&
                    <div className="edit-categories-loader-wrap">
                        <div className="edit-categories-loader"></div>
                    </div>
                }
                <header className="row categories-header space-between">
                    <h2 className="col-6">Categories</h2>
                </header>
                <div className="row top">
                    <input
                        type="text"
                        className="category-article-control"
                        placeholder="Enter category..."
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    />
                    <button
                        className="btn btn-secondary btn-category"
                        type="button"
                        onClick={handleAddCategory}
                    >
                        <PlusIcon
                            width={'1.2rem'}
                            height={'1.2rem'}
                            className={'categories-icon'}
                        />
                    </button>
                </div>
                <hr className="category-divider"/>
                <ul>
                    {
                        categories && categories.map((item, index) => {
                            return (
                            <li key={index} className="row top margin-bottom-3">
                                <input
                                    type="text"
                                    className="category-article-control"
                                    placeholder="Enter category..."
                                    value={item.name}
                                    onChange={e => handleCategories(index, e.target.value)}
                                />
                                <button
                                    className="btn btn-secondary btn-category"
                                    type="button"
                                    onClick={e => handleDelete(item.name)}
                                >
                                    <CrossIcon
                                        width={'1rem'}
                                        height={'1rem'}
                                        className={'categories-icon'}
                                    />
                                </button>
                            </li>);
                        })
                    }
                </ul>
                <div className="row right">
                    <button
                        className="btn btn-secondary full-width"
                        onClick={() => history.goBack()}
                        type="button"
                    >
                        Cancel
                    </button>
                    <button
                        className="btn btn-primary full-width margin-left-1"
                        type="button"
                        onClick={handleSave}
                    >
                        Save
                    </button>

                </div>
            </div>
      </>
    );
}

export default EditCategories;
