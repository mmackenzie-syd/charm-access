const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routers/productRouter.js');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/charm', {
    useNewUrlParser: true, // just to get rid of warnings
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use('/api/products', productRouter);
app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});


/*


app.use(cors());

//Get collection
app.get('/api/products/:category/:page', (req, res) => {
    // paginate
    const perPage = 8;
    const { page, category } = req.params;
    const products = (category === 'shop')
        ? data.products
        : data.products.filter(product => (product.category === category));

    const prodsPerPage = products.slice((page - 1) * perPage, page * perPage);

    const pages = Math.ceil(products.length / perPage);

    res.status(200).send({
        products: prodsPerPage,
        pages
    });
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

 */