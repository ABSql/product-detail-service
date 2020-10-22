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

const getProductList = (cb, id) => {
  client.query(`SELECT * FROM productinfo WHERE id < 6`, function(err, results) {
    if (err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  })
}

const getProductById = (cb, id) => {
  client.query(`SELECT * FROM productinfo WHERE id = ${id}`, function(err, results) {
    if (err) {
      cb(err, null)
    } else {
      cb(null, results.rows[0])
    }
  })
}

const getFeatures = (cb, id) => {
  client.query(`SELECT * FROM features WHERE featureproduct = ${id}`, function(err, results) {
    if (err) {
      cb(err, null)
    } else {
      cb(null, results.rows[0])
    }
  })
}

const getStyles = (cb, id) => {
  client.query(`SELECT * FROM styles WHERE productstyle = ${id}`, function(err, results) {
    if (err) {
      cb(err, null)
    } else {
      cb(null, results.rows[0])
    }
  })
}

const getPhotos = (cb, id) => {
  client.query(`SELECT * FROM photos WHERE photo_style = ${id}`, function(err, results) {
    if (err) {
      cb(err, null)
    } else {
      cb(null, results.rows[0])
    }
  })
}

const getSkus = (cb, id) => {
  client.query(`SELECT * FROM skus WHERE sku_style = ${id}`, function(err, results) {
    if (err) {
      cb(err, null)
    } else {
      cb(null, results.rows[0])
    }
  })
}

const getReviews = (cb, id) => {
  client.query(`SELECT * FROM ratings WHERE rating_product = ${id}`, function(err, results) {
    if (err) {
      cb(err, null)
    } else {
      cb(null, results.rows[0])
    }
  })
}


module.exports = {
  getProductById,
  getFeatures,
  getProductList,
  getStyles,
  getReviews,
  getPhotos,
  getSkus
  // postCartProducts,
  // getCartProducts,
}