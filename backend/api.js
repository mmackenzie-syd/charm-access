const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const { Category, Product } = require('./models.js');

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
    let products = await Product.find({}).sort({'createdAt': -1}).limit(24).exec();
    if (products) {
        res.send(products);
    } else {
        res.status(404).send({ message: 'Products Not Found'});
    }
}));

api.get('/products/:id',  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.send(product);
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

module.exports = api;
