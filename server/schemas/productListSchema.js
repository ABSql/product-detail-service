const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const productListSchema = new mongoose.Schema({
[
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
]
})

const ProductList = mongoose.model('Cart', productListSchema);

module.exports = ProductList;