const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const ratingsSchema = new mongoose.Schema({

})

const Ratings = mongoose.model('Cart', ratingsSchema);

module.exports = Ratings;