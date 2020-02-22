const mongoose = require('mongoose');

const seriesSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    }
});

const Series = mongoose.model('Series', seriesSchema);
module.exports = { Series };