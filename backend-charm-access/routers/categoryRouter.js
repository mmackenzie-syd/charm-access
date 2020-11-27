const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Category = require('../models/category.js');
const Product = require('../models/product.js');
const data = require('../data/categories.js');

// exec returns a promise
const categoryRouter = express.Router();

categoryRouter.get('/bycategory',  expressAsyncHandler(async (req, res) => {
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

categoryRouter.get('/seed', expressAsyncHandler(async (req, res) => {
        await Category.remove({});
        const createdCategories = await Category.insertMany(data);
        res.send({ createdCategories });
    })
);

categoryRouter.get('/',  expressAsyncHandler(async (req, res) => {
    const categories = await Category.find({});
    res.send(categories);
}));

module.exports = categoryRouter;