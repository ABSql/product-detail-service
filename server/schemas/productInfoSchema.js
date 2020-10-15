const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const productInfoSchema = new mongoose.Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: [{feature: String, value: String}]
})

const ProductInfo = mongoose.model('Cart', productInfoSchema);

module.exports = ProductInfo;