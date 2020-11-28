import React, {Fragment, useEffect, useState} from 'react';
import './EditProduct.css';
import Message from "../components/Message";
import Loading from "../components/Loading";
import Breadcrumb from "../components/Breadcrumb";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import Selector from "../components/Selector";
import ArrivalsSlide from "../components/ArrivalsSlide";
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../state/apiActions";
import Quantity from "../components/Quantity";
import {updateCart} from "../state/cartActions";
import PlusIcon from "../icons/PlusIcon";

function EditProduct(props) {
    const dispatch = useDispatch();
    const id = props.match.params.id;
    const categoriesApi = useSelector(state => state.categoriesApi);
    const productApi = useSelector(state => state.productApi);
    const { loading, error, data: product } = productApi;
    const { data: categories } = categoriesApi;

    const [qty, setQty] = useState(0);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('/images/largeplaceholder.png');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('shop');

    useEffect(() => {
        if (!product && id) {
            dispatch(getProduct(id));
        }
        if (product && id) {
            const {
                name,
                image,
                description,
                price,
                inventory,
                category
            } = product;
            setName(name);
            setImage(image);
            setDescription(description);
            setPrice(price);
            setQty(Number(inventory));
            setCategory(category);
        }
    }, [dispatch, id, product]);

    const onPlusBtn = (qty) => {
        setQty(Number(qty )+ 1);
    }

    const onSubBtn = (qty) => {
        if ((qty - 1) >= 0) {
            setQty(qty - 1);
        }
    }

    return (
        <div className="product">
            <main className="product margin-top-5 margin-bottom-5" style={{minHeight: '500px'}}>
                <div className="row margin-top-1 margin-bottom-2" >
                    <h3>{id ? 'Edit' : 'Create'} Product</h3>
                    <div>
                        <button className={`page-btn`}>
                            <LeftArrowIcon
                                width={'1.2rem'}
                                height={'1.2rem'}
                                offset={'.3rem'}
                            />
                        </button>
                        <button className={`page-btn`}>
                            <RightArrowIcon
                                width={'1.2rem'}
                                height={'1.2rem'}
                                offset={'.3rem'}
                            />
                        </button>
                    </div>
                </div>
                <form className="row top">
                    <div className="col-6 product__img-wrap">
                        <img className="product__img" alt={name} src={image}/>
                        <button
                            className="plus-img-btn"
                            type="button"
                        >
                            <PlusIcon
                                width={'1.2rem'}
                                height={'1.2rem'}
                                className={'create-category'}
                            />
                        </button>
                    </div>
                    <div className="col-6 padding-left-3">
                        <div className="">
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
                                        value={qty}
                                        onSubBtn={() => onSubBtn(qty)}
                                        onPlusBtn={() => onPlusBtn(qty)}
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
                                className="cancel-btn btn-full-width"
                            >
                                Cancel
                            </button>
                            <button className="save-btn btn-full-width" type="submit">Save</button>

                        </div>
                    </div>
                </form>


            </main>
        </div>);
}

export default EditProduct;

/*

*/

