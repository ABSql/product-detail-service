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
    console.log('cool beans')
    res.send(results)
  })
})

//get products by id
app.get(`/products/:productId`, (req, res) => {
  console.log('the params are: ', req.params)
  queries.getProductById(function(err, results) {
    if (err) {
      throw err;
    }
    console.log('here are the resutls: ', results)
    res.send(results)
  }, req.params.productId)
})

//get styles by Id
app.get(`/products/productId/styles`, (req, res) => {
  //chain on query to get photos & skus
  queries.getStlyes(function(err, results) {
    if (err) {
      throw err;
    }
    res.send(results)
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
