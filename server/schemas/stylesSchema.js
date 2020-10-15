const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const ratingsSchema = new mongoose.Schema({
product_id: Number,
results: [
  {style_id: Number, name: String, original_price: String, sales_price: String, default?: Number,
      photos: [{thumbnail_url: String, user: String}],
      skus: {
        7: Number,
        8: Number,
        9: Number,
        10: Number,
        11: Number,
        12:Number,
        7.5:Number,
        8.5:Number,
        9.5:Number,
        10.5:Number,
        11.5: Number}
    }
  ]
})

const Ratings = mongoose.model('Cart', ratingsSchema);

module.exports = Ratings;