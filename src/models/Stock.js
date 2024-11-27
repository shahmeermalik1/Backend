const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    symbol: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    marketCap: { type: Number },
    lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Stock', stockSchema);
