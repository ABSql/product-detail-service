const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const cartSchema = new mongoose.Schema({

})

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;