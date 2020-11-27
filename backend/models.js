const mongoose = require('mongoose');

const Category = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    slug: {type: String, required: true, unique: true},
}, {
    timestamps: true
});

const Product = new mongoose.Schema({
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

module.exports = {
    Category: mongoose.model("Category", Category),
    Product: mongoose.model("Product", Product)
}
