/* eslint-disable no-unused-vars */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 9000;
const queries = require('./queries.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`../client/dist`));

//Cart get request
app.get(`/cart/userSession`, (req, res) => {
  queries.getCartProducts(function(err, results) {
    if (err) {
      throw err;
    }
    res.send(results)
  }, req.params.userSession)
})

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
    // console.log(productMiddleman)
    const toSend = {
      "id": productMiddleman[0].id,
      "name": productMiddleman[0].product_name,
      "slogan": productMiddleman[0].slogan,
      "description": productMiddleman[0].product_description,
      "category": productMiddleman[0].category,
      "default_price": productMiddleman[0].default_price,
      "features": [
        {
          "feature": 'placeholder',
          "value": 'also a placeholder'
        }
      ]
    }
    // console.log('are we still getting the product: ', toSend)
    res.send(toSend)
  }, req.params.productId)
})

//get styles by Id
app.get(`/products/:productId/styles`, (req, res) => {
  const middleman = []
  //chain on query to get photos & skus
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
    // console.log('here is the middleman object: 'middleman)
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
          ]
        }
      ]
    }
    // console.log('heres a big ridiculous object (hopefully): ', toSend.results[0].photos[0].url)
    res.send(toSend)
  }, req.params.productId)
})



//get ratings for products
app.get(`/products/reviews/productId/meta`, (req, res) => {
  queries.getReviews(function(err, results) {
    if (err) {
      throw err;
    }
    res.send(results)
  }, req.params.productId)
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
  // eslint-disable-next-line no-console
  console.log(`Hello, Scrumdog.  Your server is running on PORT: ${PORT}`);
});
