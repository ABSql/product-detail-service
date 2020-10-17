/* eslint-disable no-unused-vars */
const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const PORT = 9000;

const { Client } = require('pg');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`../client/dist`));


const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "myPassword",
  database: "productdetailsdb"
});
client.connect();



app.get(`cart/:userSession`, (req, res) => {
  client.query()
})










//Cart get request
app.get(`cart/:userSession`, (req, res) => {
  Cart.find({
    userSession: req.params.userSession
  })
  .exec(function(err, cart) {
    if (err) {
      console.log('error getting items from cart' + err)
    } else {
      res.json(cart)
    }
  })
})

//get products by id
app.get(`products/:productId`, (req, res) => {
  ProductInfo.findOne({
    _id: req.params.id
  })
  .exec(function(err, product) {
    if (err) {
      console.log('error getting product details' + err)
    } else {
      res.json(product)
    }
  })
})

//get products list
app.get(`products/list`, (req, res) => {
  ProductList.find({})
  .exec(function(err, list) {
    if (err) {
      console.log('error getting products list' + err)
    } else {
      res.json(list)
    }
  })
})

//get styles by Id
app.get(`products/productId/styles`, (req, res) => {
  Styles.findOne({
    _id: req.params.id
  })
  .exec(function(err, styles) {
    if (err) {
      console.log('error getting product styles' + err)
    } else {
      res.json(styles)
    }
  })
})

//get ratings for products
app.get(`products/reviews/productId/meta`, (req, res) => {
  Reviews.findOne({
    _id: req.params.id
  })
  .exec(function(err, reviews) {
    if (err) {
      console.log('error getting product styles' + err)
    } else {
      res.json(reviews)
    }
  })
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
