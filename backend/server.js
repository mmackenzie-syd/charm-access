//Imports
import express from 'express';
import data from './data.js';
const app = express();
import asyncHandler from 'express-async-handler';


//Get collection

app.get('/api/products/:category', asyncHandler(async(req, res, next) => {
    const { category } = req.params;
    if (category === 'jewellery') {
        res.status(200).send(data.products);
    } else {
        const products = data.products.filter(product => (product.category === category));
        res.status(200).send(products);
    }
}));

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

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});
