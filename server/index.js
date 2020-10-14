/* eslint-disable no-unused-vars */
const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const PORT = 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`../client/dist`));

//Cart get request
app.get(`cart/:userSession`, (req, res) => {
  queries.getCartProducts(function(err, results) {
    if (err) {
      console.log('error getting cart items' + err)
    }
    res.send(results)
  }, req.params.userSession)
})

//get products by id
app.get(`products/:productId`, (req, res) => {
  queries.getCartProducts(function(err, results) {
    if (err) {
      console.log('error getting product details' + err)
    }
    res.send(results)
  }, req.params.productId)
})

//get products list
app.get(`products/list`, (req, res) => {
  queries.getCartProducts(function(err, results) {
    if (err) {
      console.log('error getting product list' + err)
    }
    res.send(results)
  }, req.params.productId)
})

//get styles by Id
app.get(`products/productId/styles`, (req, res) => {
  queries.getCartProducts(function(err, results) {
    if (err) {
      console.log('error getting product styles' + err)
    }
    res.send(results)
  }, req.params.productId)
})

//get ratings for products
app.get(`products/reviews/productId/meta`, (req, res) => {
  queries.getCartProducts(function(err, results) {
    if (err) {
      console.log('error getting reviews' + err)
    }
    res.send(results)
  }, req.params.productId)
})

//post items to the cart
app.post(`cart/:userSession`, (req, res) => {
  queries.getCartProducts(function(err, results) {
    if (err) {
      console.log('error posting to cart' + err)
    }
    res.send(results)
  }, req.params.userSession)
})



app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Hello, Scrumdog.  Your server is running on PORT: ${PORT}`);
});

/*
app.get(`/employeeinfo/:id`, (req, res) => {
  console.log('the request params are: ', req.params)
  queries.getEmployeeById(function(err, results) {
    if (err) {
      throw err
    }
    res.send(results)
  }, req.params.id)
})

*/