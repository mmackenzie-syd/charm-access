const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Product = require('../models/product.js');
const data = require('../data/products.js');

const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
}));

productRouter.get('/seed', expressAsyncHandler(async (req, res) => {
        await Product.remove({});
        const createdProducts = await Product.insertMany(data);
        res.send({ createdProducts });
    })
);

module.exports = productRouter;