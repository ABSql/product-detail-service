/* eslint-disable no-unused-vars */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 9000;
const queries = require('./queries.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`../client/dist`));

require('newrelic');
//get products list
app.get(`/products/list`, (req, res) => {
  queries.getProductList(function(err, results) {
    if (err) {
      throw err;
    }
    res.send(results)
  })
})

//get products by id
app.get(`/products/:productId`, (req, res) => {
  const productMiddleman = [];
  queries.getProductById(function(err, results) {
    if (err) {
      throw err;
    }
    productMiddleman.push(results);

    queries.getFeatures(function(err, results) {
      if (err) {
        throw err;
      }
      productMiddleman.push(results)
      const toSend = {
        "id": productMiddleman[0].id,
        "name": productMiddleman[0].product_name,
        "slogan": productMiddleman[0].slogan,
        "description": productMiddleman[0].product_description,
        "category": productMiddleman[0].category,
        "default_price": productMiddleman[0].default_price,
        "features": [
          {
            "feature": productMiddleman[1].feature,
            "value": productMiddleman[1].feature_value
          }
        ]
      }
      res.send(toSend)
    }, req.params.productId)
  }, req.params.productId)
})

//get styles by Id
app.get(`/products/:productId/styles`, (req, res) => {
  const middleman = []
  queries.getStyles(function(err, results) {
    if (err) {
      throw err;
    }
    middleman.push(results)
  }, req.params.productId)
  queries.getPhotos(function(err, results) {
    if (err) {
      throw err;
    }
    middleman.push(results)

    queries.getSkus(function(err, results) {
      if (err) {
        throw err;
      }
      middleman.push(results)
      const toSend = {
        'product_id': String(middleman[0].productstyle),
        'results': [
          {
            'style_id': middleman[0].productstyle,
            'name': middleman[0].style_name,
            'original_price': middleman[0].original_price,
            'sale_price': "0",
            'default?': 0,
            'photos': [
              {
                'thumbnail_url': middleman[1].thumbnail_url,
                'url': middleman[1].photo_url
              }
            ],
            'skus': {
              "XS": middleman[2].xs,
              "S": middleman[2].s,
              "M": middleman[2].m,
              "L": middleman[2].l,
              "XL": middleman[2].xl,
              "XXL": middleman[2].xxl,
              "7": middleman[2].seven,
              "8": middleman[2].eight,
              "9": middleman[2].nine,
              "10": middleman[2].ten,
              "11": middleman[2].eleven,
              "12": middleman[2].twelve,
              "7.5": middleman[2].seven_half,
              "8.5": middleman[2].eight_half,
              "9.5": middleman[2].nine_half,
              "10.5": middleman[2].ten_half,
              "11.5": middleman[2].eleven_half,

            }
          }
        ]
      }
      res.send(toSend)
    }, req.params.productId)
  }, req.params.productId)
})

//get ratings for products
app.get(`/reviews/:productId/meta`, (req, res) => {
  const ratingsMiddleman = [];
  queries.getReviews(function(err, results) {
    if (err) {
      throw err;
    }
    ratingsMiddleman.push(results)
    console.log('ratings results: ', ratingsMiddleman)
    const toSend = {
      "product_id": String(ratingsMiddleman[0].rating_product),
      "ratings": {
        "1": ratingsMiddleman[0].one,
        "2": ratingsMiddleman[0].two,
        "3": ratingsMiddleman[0].three,
        "4": ratingsMiddleman[0].four,
        "5": ratingsMiddleman[0].five
      }
    }
    res.send(toSend)
  }, req.params.productId)
})

//Cart get request
app.get(`/cart/userSession`, (req, res) => {
  queries.getCartProducts(function(err, results) {
    if (err) {
      throw err;
    }
    res.send(results)
  }, req.params.userSession)
})

//post items to the cart
app.post(`cart/userSession`, (req, res) => {
  queries.postCartProducts(function(err, results) {
    if (err) {
      throw err;
    }
    res.send(results)
  }, req.params.userSession)
})



app.listen(PORT, () => {
  console.log(`Hello, Scrumdog.  Your server is running on PORT: ${PORT}`);
});
