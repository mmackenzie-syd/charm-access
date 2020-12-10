const express = require('express');
const expressAsyncHandler = require('express-async-handler');

const { model, Schema, Types } = require('mongoose');

const Category = model("Category", new Schema({
    name: {type: String, required: true, unique: true},
    slug: {type: String, required: true, unique: true},
}));

const Product = model("Product", new Schema({
    name: {type: String, required: true, unique: true},
    image: {type: String, required: true},
    thumbnail: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    inventory: {type: Number, required: true},
}, {
    timestamps: true
}))

// exec returns a promise
const api = express.Router();

api.get('/categories/bycategory',  expressAsyncHandler(async (req, res) => {
    const categories = await Category.find({});
    const byCategory = [];
    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        const { slug } = category;
        const query = (slug === 'shop') ? {} : { category: { $eq: slug } };
        const count = await Product.countDocuments(query);
        const product = await Product.findOne({ category: slug }); // returns null if not found
        if (slug !== 'shop' && product) {
            byCategory.push({ product, category, count });
        }
    }
    res.send(byCategory);
}));

api.get('/categories/',  expressAsyncHandler(async (req, res) => {
    const categories = await Category.find({});
    res.send(categories);
}));

api.get('/products/arrivals', expressAsyncHandler(async (req, res) => {
    let products = await Product.find({}).sort({'createdAt': -1}).limit(12).exec();
    if (products) {
        res.send(products);
    } else {
        res.status(404).send({ message: 'Products Not Found'});
    }
}));

api.get('/product/:id',  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    const category = product.category;
    const id = product._id;
    const query = (category === 'shop')
        ? {}
        : { category: { $eq: category }, _id: {$ne: Types.ObjectId(id) } };
    // exec returns a promise from the chain
    const products = await Product.find(query).limit(4).exec();

    if (product) {
        res.send({ product, products });
    } else {
        res.status(404).send({ message: 'Product Not Found'});
    }
}));

api.get('/products/:category/:page',  expressAsyncHandler(async (req, res) => {
    // paginate
    const { page, category } = req.params;
    const query = (category === 'shop') ? {} : { category: { $eq: category } };
    const perPage = 8;
    const count = await Product.countDocuments(query);
    const pages = Math.ceil(count / perPage);

    if (pages === 0) {
        // no products with this category or page
        res.status(404).send({ message: 'Products not found'});
    } else {
        // exec returns a promise from the chain
        const products = await Product.find(query).skip(perPage * (page - 1)).limit(perPage).exec();
        res.json({ products, pages });
    }
}));

api.get('/product/next/:id',   (req, res, next) => {
    const id = req.params.id;
    Product.find({_id: {$gt: Types.ObjectId(id) }}).sort({_id: 1 }).limit(1).exec((err, products) => {
        if (err) {
            res.status(404).send(err);
        }
        if (products && products[0]) {
            res.send({ id: products[0]._id });
        } else {
            res.send({ id: -1 });
        }
    });
});

api.get('/product/previous/:id',  async (req, res) => {
    const id = req.params.id;
    Product.find({_id: {$lt: Types.ObjectId(id) }}).sort({_id: 1 }).limit(1).exec((err, products) => {
        if (err) {
            res.status(404).send(err);
        }
        if (products && products[0]) {
            res.send({ id: products[0]._id });
        } else {
            res.send({ id: -1 });
        }
    });
});

module.exports = api;
