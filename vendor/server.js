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

// Routes
const router = express.Router();

router.get('/',  asyncHandler(async (req, res) => {
    res.status(200).send('VENDOR API');
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

// new category and also edit categories - replace all
router.post('/categories', asyncHandler(async (req, res) => {
    await Category.remove({});
    const categories = req.body.categories;
    const createdCategories = await Category.insertMany(categories);
    res.send({ createdCategories });
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

// End of routes
app.use('/', router);

if (!SERVERLESS) {
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log(`Serve at http://localhost:${port}`);
    });
}
//Export app
module.exports.run = sls(app);
