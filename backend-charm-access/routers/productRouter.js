const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Product = require('../models/product.js');
const data = require('../data/products.js');

const productRouter = express.Router();


productRouter.get('/seed', expressAsyncHandler(async (req, res) => {
        await Product.remove({});
        const createdProducts = await Product.insertMany(data);
        res.send({ createdProducts });
    })
);


productRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    Product.findById(id).exec((err, product) => {
        if (err) {
            res.status(500);
            return res.send(err);
        }
        res.status(200);
        return res.json(product);
    });
});


productRouter.get('/:category/:page',  expressAsyncHandler(async (req, res) => {
    // paginate
    const { page, category } = req.params;
    const query = (category === 'shop') ? {} : { category: { $eq: category } };
    const perPage = 8;
    const count = await Product.countDocuments(query);
    const pages = Math.ceil(count / perPage);

    if (pages === 0) {
        // no products with this category
        res.status(404).send({ message: 'Products error'});
    } else {
        const products = await Product.find(query).skip(perPage * (page - 1)).limit(perPage);
        res.json({ products, pages });
    }

}));

module.exports = productRouter;