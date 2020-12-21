import React, {useEffect, useState} from 'react';
import './EditCategories.css';
import PlusIcon from "../icons/PlusIcon";
import {getCategories, saveCategories} from "../api/authApi";
import {useHistory} from "react-router";
import CrossIcon from "../icons/CrossIcon";

function EditCategories() {
    const history = useHistory();
    const [category, setCategory] = useState('')
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await getCategories();
                setCategories(data.slice(1));
            } catch(error) {
                setError(error);
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
            const newCategories = categories.map(({ name, slug }) => ({ name, slug }));
            newCategories.unshift(  {
                name: 'Shop',
                slug: 'shop'
            });
            const response = await saveCategories(newCategories);
            history.goBack();
        } catch(error) {
            setError(error);
        }
    }

    return (
            <div className="categories margin-bottom-5">
                <header className="row categories-header space-between">
                    <h2 className="col-6">Categories</h2>
                </header>
                <div className="row top">
                    <input
                        type="text"
                        className="product-article-control"
                        placeholder="Enter category..."
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    />
                    <button
                        className="categories-btn"
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
                <ul>
                    {
                        categories && categories.map((item, index) => {
                            return (
                            <li key={index} className="row top">
                                <input
                                    type="text"
                                    className="product-article-control"
                                    placeholder="Enter category..."
                                    value={item.name}
                                    onChange={e => handleCategories(index, e.target.value)}
                                />
                                <button
                                    className="categories-btn"
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
                        className="cancel-btn"
                        onClick={() => history.goBack()}
                        type="button"
                    >
                        Cancel
                    </button>
                    <button
                        className="save-btn"
                        type="button"
                        onClick={handleSave}
                    >
                        Save
                    </button>

                </div>
            </div>);
}

export default EditCategories;
