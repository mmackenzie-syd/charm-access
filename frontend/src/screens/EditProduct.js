import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import './EditProduct.css';
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import {useSelector} from "react-redux";
import Quantity from "../components/Quantity";
import PlusIcon from "../icons/PlusIcon";
import {createProduct, updateProduct} from "../api/authApi";
import {getProduct} from "../api/unauthApi";
import {getNextId, getPreviousId} from "../api/unauthApi";
import PhotoLoader from "../components/PhotoLoader";

function EditProduct(props) {
    const history = useHistory();
    const id = props.match.params.id;
    const { data: categories } = useSelector(state => state.categoriesApi);

    const [inventory, setInventory] = useState(1);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('/images/largeplaceholder.png');
    const [thumbnail, setThumbnail] = useState('/images/placeholder.png');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('shop');
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            if (!id) {
                return;
            }
            try {
                const { data } = await getProduct(id);
                const {
                        name,
                        image,
                        thumbnail,
                        description,
                        price,
                        inventory,
                        category
                    } = data;
                    setName(name);
                    setImage(image);
                    setThumbnail(thumbnail);
                    setDescription(description);
                    setPrice(price);
                    setInventory(Number(inventory));
                    setCategory(category);
            } catch(error) {
                setError(error);
            }
        })();
        }, [id]);

    const onPlusBtn = (inventory) => {
        setInventory(Number(inventory )+ 1);
    }

    const onSubBtn = (inventory) => {
        if ((inventory - 1) >= 0) {
            setInventory(inventory - 1);
        }
    }

    const getNext = async () => {
        const { data } = await getNextId(id);
        if (data && data.id !== -1) {
            history.push(`/dashboard/product/${data.id}`);
        }
    }

    const getPrevious = async () => {
        const { data } = await getPreviousId(id);
        if (data && data.id !== -1) {
            history.push(`/dashboard/product/${data.id}`);
        }
    }


    const submitHandler = async (e) => {
        e.preventDefault();
        const product = {
            name,
            image,
            thumbnail,
            description,
            price,
            inventory,
            category
        };
        if (id) {
            try {
                const { data } = await updateProduct(id, product);
                history.goBack();
            } catch(error) {
                setError(error);
            }
        } else {
            try {
                const { data } = await createProduct(product);
                history.goBack();
            } catch(error) {
                setError(error);
            }
        }
    }


    return (
        <div className="product">
            <main className="product margin-bottom-5" style={{minHeight: '500px'}}>
                <div className="row margin-top-1 margin-bottom-2" >
                    <h3>{id ? 'Edit' : 'Create'} Product</h3>
                    <div>
                        <button className='btn btn-secondary btn-icon' onClick={getPrevious}>
                            <LeftArrowIcon width={'1.2rem'} height={'1.2rem'} offset={'.3rem'}/>
                        </button>
                        <button className='btn btn-secondary btn-icon' onClick={getNext}>
                            <RightArrowIcon width={'1.2rem'} height={'1.2rem'} offset={'.3rem'}/>
                        </button>
                    </div>
                </div>
                <form className="grid grid-col-2-large" onSubmit={submitHandler}>
                    <div className="product-img-rel">
                        <img
                            className="product-img"
                            alt={name}
                            src={image}
                        />
                        <div className="plus-img-btn">
                            <PhotoLoader />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Product Name</label>
                            <input
                                type="text"
                                className="product-article-control"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="product-article-group" >
                            <label>Category</label>
                            <select
                                name="category"
                                className="product-article-control"
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                            >
                                {
                                    categories && categories.map(({ name, slug }, index) => {
                                        return(
                                            <option key={ index + 1 } value={ slug }>{ name }</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="row top space-between">
                            <div className="col-8 margin-right-5">
                                <label>$ Price</label>
                                <input
                                    type="text"
                                    className="product-article-control"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                />
                            </div>
                            <div className="col-4" >
                                <label className="margin-left-2">Inventory</label>
                                <div className="">
                                    <Quantity
                                        value={inventory}
                                        onSubBtn={() => onSubBtn(inventory)}
                                        onPlusBtn={() => onPlusBtn(inventory)}
                                    />
                                </div>

                            </div>
                        </div>

                        <div className="margin-bottom-3">
                            <label>Description</label>
                            <textarea
                                name="message"
                                className="product-article-control"
                                cols={60}
                                rows={10}
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="row">
                            <button
                                className="btn btn-secondary full-width"
                                onClick={() => history.goBack()}
                                type="button"
                            >
                                Cancel
                            </button>
                            <button
                                className="btn btn-primary full-width margin-left-1"
                                type="submit"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>


            </main>
        </div>);
}

export default EditProduct;

/*

*/

