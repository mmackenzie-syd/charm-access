const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const { Category, Product } = require('./models.js')

// exec returns a promise
const vendor = express.Router();

const perPage = 4;

vendor.get('/categories',  expressAsyncHandler(async (req, res) => {
    const categories = await Category.find({});
    res.send(categories);
}));


vendor.post('/categories', expressAsyncHandler(async (req, res) => {
    await Category.remove({});
    const createdCategories = await Category.insertMany(req.body.categories);
    res.send({ createdCategories });
}));

/* seed data */
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
/* end seed data */

vendor.get('/product/:id',  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found'});
    }
}));

vendor.put('/product/inventory/:id', expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
        product.inventory = req.body.inventory;
        const updatedProduct = product.save();
        res.send({ message: 'Product Updated', product: updatedProduct});
    } else {
        res.status(404).send({ message: 'Product Not Found'});
    }
}));

vendor.put('/product/:id', expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
        product.inventory = req.body.inventory;
        product.price = req.body.price;
        product.name = req.body.name;
        product.category = req.body.category;
        product.description = req.body.description;
        product.image = req.body.image;
        product.thumbnail = req.body.thumbnail;
        const updatedProduct = product.save();
        res.send({ message: 'Product Updated', product: updatedProduct});
    } else {
        res.status(404).send({ message: 'Product Not Found'});
    }
}));

vendor.post('/product', expressAsyncHandler(async (req, res) => {
    const product = new Product({
        inventory: req.body.inventory,
        price: req.body.price,
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        image: req.body.image,
        thumbnail: req.body.thumbnail,
    })
    const createdProduct = await product.save();
    res.send({ message: 'Product Created', product: createdProduct});
}));

vendor.delete('/product/:id', expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;

    const product = await Product.findById(productId);
    if (product) {
        const deletedProduct = await product.remove();
        const count = await Product.countDocuments({});
        const pages = Math.ceil(count / perPage);
        res.send({ message: 'Product Deleted', product: deletedProduct, pages });
    } else {
        res.status(404).send({ message: 'Product Not Found'});
    }
}));

vendor.get('/products/:page',  expressAsyncHandler(async (req, res) => {
    // paginate and return in descending order
    let { page } = req.params;
    const count = await Product.countDocuments({});
    const pages = Math.ceil(count / perPage);

    if (pages === 0) {
        // no products with this category or page
        res.status(404).send({ message: 'Products not found'});
    } else {
        // exec returns a promise from the chain
        const products = await Product.find({}).sort({'createdAt': -1}).skip(perPage * (page - 1)).limit(perPage).exec();
        res.json({ products, pages, page });
    }
}));

module.exports = vendor;
