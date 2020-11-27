const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const { Category, Product } = require('./models.js');
const data = require('../data/categories.js');

// exec returns a promise
const categoryRouter = express.Router();
const productRouter = express.Router();

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

productRouter.get('/seed', expressAsyncHandler(async (req, res) => {
        await Product.remove({});
        const createdProducts = await Product.insertMany(data);
        res.send({ createdProducts });
    })
);

productRouter.get('/:id',  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found'});
    }
}));

productRouter.get('/:category/:page',  expressAsyncHandler(async (req, res) => {
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

exports.categoryRouter = categoryRouter;
exports.productRouter = productRouter;
