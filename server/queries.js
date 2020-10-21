const { Client } = require('pg');

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "myPassword",
  database: "productdetailsdb"
});

client.connect(function(err) {
  if (err) {
    return console.log('error: ', err.message)
  }
  console.log('Connected to postgres')
});

const getProductById = (cb, id) => {
  client.query(`SELECT * FROM productinfo WHERE id = ${id}`, function(err, results) {
    if (err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

const getStyles = (cb, id) => {
  client.query(`SELECT * FROM styles WHERE productstyle = ${id}`, function(err, results) {
    if (err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

const getProductList = (cb, id) => {
  client.query(`SELECT * FROM productinfo WHERE id < 6`, function(err, results) {
    if (err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}


module.exports = {
  // getCartProducts,
  getProductById,
  getProductList,
  getStyles,
  // getReviews,
  // postCartProducts,
}