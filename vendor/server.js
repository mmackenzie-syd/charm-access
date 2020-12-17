const sls = require('serverless-http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const asyncHandler = require('express-async-handler');
const createError = require('http-errors');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const categoriesSeed = require('./categories');
const productsSeed = require('./products');

// Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

// Env Parameters
const MONGODB_URL = process.env.MONGODB_URL;
const SERVERLESS = process.env.SERVERLESS;

// Connect
mongoose.connect(MONGODB_URL);

// Schemas
const CategorySchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    slug: {type: String, required: true, unique: true},
})

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    image: {type: String, required: true},
    thumbnail: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    inventory: {type: Number, required: true},
}, {
    timestamps: true
});

// Models
const Category = mongoose.model('Category', CategorySchema);
const Product = mongoose.model('Product', ProductSchema);

// Routes
const router = express.Router();

router.get('/',  asyncHandler(async (req, res) => {
    res.status(200).send('VENDOR API');
}));

const perPage = 4;

api.get('/categories',  asyncHandler(async (req, res) => {
    const categories = await Category.find({});
    res.send(categories);
}));


/* seed data */
router.get('/categories/seed', asyncHandler(async (req, res) => {
        await Category.remove({});
        const createdCategories = await Category.insertMany(categoriesSeed);
        res.send({ createdCategories });
    })
);

router.get('/products/seed', asyncHandler(async (req, res) => {
        await Product.remove({});
        const createdProducts = await Product.insertMany(productsSeed);
        res.send({ createdProducts });
    })
);
/* end seed data */

router.get('/product/:id',  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found'});
    }
}));

router.put('/product/inventory/:id', asyncHandler(async (req, res) => {
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

router.put('/product/:id', asyncHandler(async (req, res) => {
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

router.post('/product', asyncHandler(async (req, res) => {
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

router.delete('/product/:id', asyncHandler(async (req, res) => {
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

router.get('/products/:page',  asyncHandler(async (req, res) => {
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

router.get('/product/next/:id',   async (req, res, next) => {
    const id = req.params.id;
    let nextProduct = await Product.findOne({_id: {$gt: mongoose.Types.ObjectId(id) }}).sort({_id: 1 }).exec();
    if (nextProduct) {
        res.send({ id: nextProduct._id });
    } else {
        nextProduct = await Product.findOne({}).sort({'createdAt': 1}).exec();
        res.send({ id: nextProduct._id });
    }
});

router.get('/product/previous/:id',  async (req, res) => {
    const id = req.params.id;
    let prevProduct = await Product.findOne({_id: {$lt: mongoose.Types.ObjectId(id) }}).sort({_id: -1 }).exec();
    if (prevProduct) {
        res.send({ id: prevProduct._id });
    } else {
        prevProduct = await Product.findOne({}).sort({'createdAt': -1}).exec();
        res.send({ id: prevProduct._id });
    }
});

// End of routes

app.use('/', router);

// Errors
app.use((req, res, next) => {
    next(createError(404));
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message,
        status: error.status
    });
});
if (!SERVERLESS) {
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log(`Serve at http://localhost:${port}`);
    });
}
//Export app
module.exports.run = sls(app);
