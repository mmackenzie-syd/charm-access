const { model, Schema } = require('mongoose');

const Category = model("Category", new Schema({
    name: {type: String, required: true, unique: true},
    slug: {type: String, required: true, unique: true},
}, {
    timestamps: true
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
}))

exports.Category = Category;
exports.Product = Product;
