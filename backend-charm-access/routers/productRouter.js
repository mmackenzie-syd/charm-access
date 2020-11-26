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

productRouter.get('/:category/:page',  expressAsyncHandler(async (req, res) => {
    // paginate
    const { page, category } = req.params;
    const query = (category === 'shop') ? {} : { category: { $eq: category } };

    const perPage = 8;
    let index = page - 1;
    let pages = 1;
    Product.count(query).exec((err, count) => {
        if (err) {
            return res.send(err);
        }
        pages = Math.ceil(count / perPage);
        if (pages > 0) {
            if (index > (pages - 1)) {
                index -= 1;
            }
        }
        return Product.find(query).skip(perPage * index).limit(perPage).exec((error, products) => {
            if (error) {
                return res.send(err);
            }
            return res.json({ products, pages });
        });
    });

}));

module.exports = productRouter;