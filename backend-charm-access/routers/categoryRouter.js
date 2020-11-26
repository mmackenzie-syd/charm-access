const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Category = require('../models/category.js');
const data = require('../data/categories.js');

const categoryRouter = express.Router();

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