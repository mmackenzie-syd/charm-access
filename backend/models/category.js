const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    slug: {type: String, required: true, unique: true},
}, {
    timestamps: true
});

const Category = mongoose.model("Category", productSchema);

module.exports = Category;
