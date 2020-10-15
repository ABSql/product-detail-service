const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const ratingsSchema = new mongoose.Schema({
product_id: String,
ratings: {
  1: Number,
  2: Number,
  3: Number,
  4: Number,
  5: Number,
},
recommended: {
  0: Number,
  1: Number
},
characteristsics: {
  Size: {
    id: Number,
    Value: String
  },
  Width: {
    id: Number,
    value: String
  },
  Comfort: {
    id: Number,
    value: String
  },
  Quality: {
    id: Number,
    value: String
  }
}
})

const Ratings = mongoose.model('Cart', ratingsSchema);

module.exports = Ratings;