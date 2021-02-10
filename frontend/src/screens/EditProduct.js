import React, {useEffect, useRef, useState} from 'react';
import { useHistory } from 'react-router-dom';
import './EditProduct.css';
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import {useSelector} from "react-redux";
import Quantity from "../components/Quantity";
import {createProduct, updateProduct} from "../api/authApi";
import {getProduct} from "../api/unauthApi";
import {getNextId, getPreviousId} from "../api/unauthApi";
import PhotoLoader from "../components/PhotoLoader";
import saveImage from "../services/saveImage";

const defaultImage = '/images/largeplaceholder.png'

function EditProduct(props) {
    const imgRef = useRef(null);
    const history = useHistory();
    const id = props.match.params.id;
    const { data: categories } = useSelector(state => state.categoriesApi);

    const [imageFileNames, setImageFileNames] = useState({});

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [validate, setValidate] = useState('');

    const [inventory, setInventory] = useState(1);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(defaultImage);
    const [thumbnail, setThumbnail] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('shop');

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

    const isNumeric = (num) => {
        return !isNaN(num)
    }
    const validateProduct = ({ image }) => {
        if (name === '') {
            setValidate('product name must be given');
            return false;
        }
        if (description === '') {
            setValidate('product description must be given');
            return false;
        }
        if (price === '') {
            setValidate('product price must be given');
            return false;
        }
        if (!isNumeric(price)) {
            setValidate('a valid number must be used for product');
            return false;
        }

        if (image === defaultImage) {
            setValidate('an image must be selected for the product');
            return false;
        }
        return true;
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        let product = {
            name,
            thumbnail,
            image,
            description,
            price,
            inventory,
            category
        };
        let shouldSaveImage = false;
        if (imageFileNames.standard || imageFileNames.thumbnail) {
            product.thumbnail = '/products/' + imageFileNames.thumbnail;
            product.image = '/products/' + imageFileNames.standard;
            shouldSaveImage = true;
        }

        if (!validateProduct(product)) {
            return;
        }

        if (id) {
            try {
                setLoading(true);
                if (shouldSaveImage) {
                    await saveImage(imgRef, imageFileNames);
                    await updateProduct(id, product);
                    setLoading(false);
                    history.goBack();
                } else {
                    await updateProduct(id, product);
                    setLoading(false);
                    history.goBack();
                }
            } catch(error) {
                setLoading(false);
                setError(error.toString());
            }
        } else {
            try {
                await saveImage(imgRef, imageFileNames);
                await createProduct(product);
                setLoading(false);
                history.goBack();
            } catch(error) {
                setLoading(false);
                setError(error.toString());
            }
        }
    }

    const handleClose = () => {
       setValidate('');
    }

    return (
        <div className="product">
            { validate &&
                <div className="validate-message-box validate-message-box-red margin-bottom-2">
                    <span onClick={handleClose} className="validate-message-box-close">&#10005;</span>
                    { validate  }
                </div>
            }
            <main className="product margin-bottom-5" style={{minHeight: '500px'}}>
                <div className="row margin-top-1 margin-bottom-2" >
                    <h3>{id ? 'Edit' : 'Create'} Product</h3>
                    { id &&
                        <div>
                            <button className='btn btn-secondary btn-icon' onClick={getPrevious}>
                                <LeftArrowIcon width={'1.2rem'} height={'1.2rem'} offset={'.3rem'}/>
                            </button>
                            <button className='btn btn-secondary btn-icon' onClick={getNext}>
                                <RightArrowIcon width={'1.2rem'} height={'1.2rem'} offset={'.3rem'}/>
                            </button>
                        </div>
                    }
                </div>
                <form className="grid grid-col-2-large" onSubmit={submitHandler}>
                    <div className="product-img-rel cropper-hidden">
                        <img
                            className="product-img"
                            alt={name}
                            src={image}
                            ref={imgRef}
                        />
                        <div className="plus-img-btn">
                            <PhotoLoader imgRef={imgRef} onFileLoad={filenames => setImageFileNames(filenames)}/>
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

