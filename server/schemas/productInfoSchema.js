const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const productInfoSchema = new mongoose.Schema({

})

const ProductInfo = mongoose.model('Cart', productInfoSchema);

module.exports = ProductInfo;