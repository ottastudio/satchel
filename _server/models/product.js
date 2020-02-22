const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const producSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    },
    description: {
        required: true,
        type: String,
        maxlength: 100000
    },
    price: {
        required: true,
        type: Number,
        maxlength: 255
    },
    gender: {
        type: Schema.Types.ObjectId,
        ref: 'Gender',
        required: true
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    usable: {
        type: Schema.Types.ObjectId,
        ref: 'Usable',
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    series: {
        type: Schema.Types.ObjectId,
        ref: 'Series',
    },
    shipping: {
        required: true,
        type: Boolean
    },
    available: {
        required: true,
        type: Boolean
    },
    sold: {
        type: Number,
        maxlength: 100,
        default: 0
    },
    stock: {
        type: Number,
        maxlength: 100,
        default: 0
    },
    publish: {
        required: true,
        type: Boolean
    },
    images: {
        type: Array,
        default: []
    }
}, {timestamps: true});

const Product = mongoose.model('Product', producSchema);
module.exports = { Product };