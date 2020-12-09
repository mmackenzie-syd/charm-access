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
}));

const categoriesSeed = require('./data/categories');
const productsSeed = require('./data/products');

// exec returns a promise
const api = express.Router();

const perPage = 4;

api.get('/categories',  expressAsyncHandler(async (req, res) => {
    const categories = await Category.find({});
    res.send(categories);
}));


api.post('/categories', expressAsyncHandler(async (req, res) => {
    await Category.remove({});
    const createdCategories = await Category.insertMany(req.body.categories);
    res.send({ createdCategories });
}));

/* seed data */
api.get('/categories/seed', expressAsyncHandler(async (req, res) => {
        await Category.remove({});
        const createdCategories = await Category.insertMany(categoriesSeed);
        res.send({ createdCategories });
    })
);

api.get('/products/seed', expressAsyncHandler(async (req, res) => {
        await Product.remove({});
        const createdProducts = await Product.insertMany(productsSeed);
        res.send({ createdProducts });
    })
);
/* end seed data */

api.get('/product/:id',  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found'});
    }
}));

api.put('/product/inventory/:id', expressAsyncHandler(async (req, res) => {
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

api.put('/product/:id', expressAsyncHandler(async (req, res) => {
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

api.post('/product', expressAsyncHandler(async (req, res) => {
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

api.delete('/product/:id', expressAsyncHandler(async (req, res) => {
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

api.get('/products/:page',  expressAsyncHandler(async (req, res) => {
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


api.get('/product/next/:id',  async (req, res) => {
    const id = req.params.id;
    const product = await Product.find({_id: {$gt: Types.ObjectId(id) }}).sort({_id: 1 }).limit(1);
    if (product && product[0]) {
        res.send(product[0]._id);
    } else {
        res.send(-1);
    }
});

api.get('/product/previous/:id',  async (req, res) => {
    const id = req.params.id;
    const product = await Product.find({_id: {$lt: Types.ObjectId(id) }}).sort({_id: -1 }).limit(1);
    console.log('prev', product)
    if (product && product[0]) {
        res.send(product[0]._id);
    } else {
        res.send(-1);
    }
});

module.exports = api;
