const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const cartSchema = new mongoose.Schema({
  id: Number,
  name: String,
  default_price: String
})

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;