const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const { Category, Product } = require('./models.js')

// exec returns a promise
const vendor = express.Router();

vendor.get('/categories/',  expressAsyncHandler(async (req, res) => {
    const categories = await Category.find({});
    res.send(categories);
}));


vendor.get('categories/seed', expressAsyncHandler(async (req, res) => {
        await Category.remove({});
        const createdCategories = await Category.insertMany(data);
        res.send({ createdCategories });
    })
);


vendor.get('/products/seed', expressAsyncHandler(async (req, res) => {
        await Product.remove({});
        const createdProducts = await Product.insertMany(data);
        res.send({ createdProducts });
    })
);

vendor.get('/product/:id',  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found'});
    }
}));

vendor.get('/products/:page',  expressAsyncHandler(async (req, res) => {
    // paginate
    const { page, category } = req.params;
    const perPage = 4;
    const count = await Product.countDocuments({});
    const pages = Math.ceil(count / perPage);

    if (pages === 0) {
        // no products with this category or page
        res.status(404).send({ message: 'Products not found'});
    } else {
        // exec returns a promise from the chain
        const products = await Product.find({}).skip(perPage * (page - 1)).limit(perPage).exec();
        res.json({ products, pages });
    }
}));

module.exports = vendor;
