const mongoose = require('mongoose');

const usableSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    }
});

const Usable = mongoose.model('Usable', usableSchema);
module.exports = { Usable };