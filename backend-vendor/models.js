const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    slug: {type: String, required: true, unique: true},
}, {
    timestamps: true
});

const productSchema = new mongoose.Schema({
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

const Category = mongoose.model("Category", categorySchema);
const Product = mongoose.model("Product", productSchema);

exports.Product = Product;
exports.Category = Category;
