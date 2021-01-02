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
mongoose.connect(MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

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

// Helper Functions
const getNextId = async (currId) => {
    let nextProduct = await Product.findOne({_id: {$gt: mongoose.Types.ObjectId(currId) }}).sort({_id: 1 }).exec();
    if (nextProduct) {
        return nextProduct._id;
    } else {
        nextProduct = await Product.findOne({}).sort({'createdAt': 1}).exec();
        return nextProduct._id;
    }
}

const getPrevId = async (currId) => {
    let prevProduct = await Product.findOne({_id: {$lt: mongoose.Types.ObjectId(currId) }}).sort({_id: -1 }).exec();
    if (prevProduct) {
        return prevProduct._id;
    } else {
        prevProduct = await Product.findOne({}).sort({'createdAt': -1}).exec();
        return prevProduct._id;
    }
}

// Routes
const router = express.Router();

router.get('/',  asyncHandler(async (req, res) => {
    res.status(200).send('SHOP API');
}));

// Get all Categories
router.get('/categories',  asyncHandler(async (req, res) => {
    const categories = await Category.find({});
    res.status(200).send(categories);
}));

// Get a Product for each Category
router.get('/categorySlides',  asyncHandler(async (req, res) => {
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

router.get('/arrivalSlides', asyncHandler(async (req, res) => {
    let products = await Product.find({}).sort({'createdAt': -1}).limit(12).exec();
    if (products) {
        res.send(products);
    } else {
        res.status(404).send({ message: 'Products Not Found'});
    }
}));

router.get('/product/:id',  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found'});
    }
}));

router.get('/productId/next/:id',   async (req, res, next) => {
    const id = req.params.id;
    const nextId = await getNextId(id);
    res.send({ id: nextId });
});

router.get('/productId/previous/:id',  async (req, res) => {
    const id = req.params.id;
    const prevId = await getPrevId(id);
    res.send({ id: prevId });
});

router.get('/products/:page',  asyncHandler(async (req, res) => {
    // paginate and return in descending order
    const perPage = 4;
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

router.get('/productsByCategory/:category/:page',  asyncHandler(async (req, res) => {
    // paginate
    const { page, category } = req.params;
    const query = ((category === 'shop') || (category === 'new')) ? {} : { category: { $eq: category } };

    const perPage = 8;
    const count = await Product.countDocuments(query);
    const pages = Math.ceil(count / perPage);

    if (pages === 0) {
        // no products with this category or page
        res.status(404).send({ message: 'Products not found'});
    } else {
        // exec returns a promise from the chain
        let products = [];
        if (category === 'new') {
            // sort if shop 'new'
            products = await Product.find({}).sort({'createdAt': -1}).skip(perPage * (page - 1)).limit(perPage).exec();
            res.json({ products, pages });
        } else {
            products = await Product.find(query).skip(perPage * (page - 1)).limit(perPage).exec();
            res.json({ products, pages });
        }
    }
}));

router.get('/search/:page/:searchString',  asyncHandler(async (req, res, next) => {
    // paginate
    const { page, searchString } = req.params;

    // and search method
    // const arr = searchString.split(/\s+/);
    // let andSearchString = `\"${arr[0].trim()}\"`;
    // console.log('arr', arr)
    // for (let i = 1; i < arr.length; i++) {
    //     andSearchString = andSearchString + " " + `\"${arr[i].trim()}\"`;
    // }

    const query = {$text: {$search: searchString}};
    const perPage = 8;
    const count = await Product.countDocuments(query);
    const pages = Math.ceil(count / perPage);

    if (count === 0) {
        // no products with this category or page
        res.send({ count: 0 });
    } else {
        // exec returns a promise from the chain
        const products = await Product.find(query).skip(perPage * (page - 1)).limit(perPage).exec();
        res.json({ products, pages });
    }
}));


// End of routes

app.use('/', router);


if (!SERVERLESS) {
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
        console.log(`Serve at http://localhost:${port}`);
    });
}
//Export app
module.exports.run = sls(app);
