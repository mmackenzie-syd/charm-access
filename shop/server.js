const sls = require('serverless-http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const asyncHandler = require('express-async-handler');
const createError = require('http-errors');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

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
    res.status(200).send('categories is ready');
}));

// Get all Categories
router.get('/categories',  asyncHandler(async (req, res) => {
    const categories = await Category.find({});
    res.status(200).send(categories);
}));

// Get a Product for each Category
router.get('/categories/bycategory',  asyncHandler(async (req, res) => {
    const categories = await Category.find({});
    const byCategory = [];
    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        const { slug } = category;
        const query = (slug === 'shop') ? {} : { category: { $eq: slug } };
        const count = await Product.countDocuments(query);
        const product = await Product.findOne({ category: slug }); // returns null if not found
        if (slug !== 'shop' && product) {
            byCategory.push({ product, category, count });
        }
    }
    res.send(byCategory);
}));

router.get('/products/arrivals', asyncHandler(async (req, res) => {
    let products = await Product.find({}).sort({'createdAt': -1}).limit(12).exec();
    if (products) {
        res.send(products);
    } else {
        res.status(404).send({ message: 'Products Not Found'});
    }
}));

router.get('/product/:id',  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    const category = product.category;
    const id = product._id;
    const query = (category === 'shop')
        ? {}
        : { category: { $eq: category }, _id: {$ne: mongoose.Types.ObjectId(id) } };
    // exec returns a promise from the chain
    const products = await Product.find(query).limit(4).exec();

    if (product) {
        res.send({ product, products });
    } else {
        res.status(404).send({ message: 'Product Not Found'});
    }
}));

router.get('/products/:category/:page',  asyncHandler(async (req, res) => {
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
