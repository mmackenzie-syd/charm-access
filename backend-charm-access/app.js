//Imports
const express = require('express');
const data = require('./data.js');
const app = express();
const cors = require('cors');
const asyncHandler = require('express-async-handler');

app.use(cors());

//Get collection
app.get('/api/products/:category/:page', (req, res) => {
    // paginate
    const perPage = 8;
    const { page, category } = req.params;
    const products = (category === 'jewellery')
        ? data.products
        : data.products.filter(product => (product.category === category));

    const prodsPerPage = products.slice((page - 1) * perPage, page * perPage);

    const pages = Math.ceil(products.length / perPage);

    res.status(200).send({ products: prodsPerPage, pages });
});

app.get('/api/categories', asyncHandler(async(req, res, next) => {
    res.status(200).send(data.categories);
}))

//Get a single document
app.get('/api/product/:id', asyncHandler(async(req, res, next) => {
    const { id } = req.params;
    const product = data.products.find(x => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.send({});
    }
}));

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});

// module.exports = app;
