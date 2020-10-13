import React, { useState, useEffect } from 'react';
// import GlobalStyle from './globalStyle';
import getCart from '../API/GetCart';
import getProducts from '../API/GetProducts';
import getProductInfo from '../API/GetProductInfo';
import getProductStyles from '../API/GetProductStyles';
import getRatings from '../API/GetRatings';
import AddItem from './AddToCart';
import Header from './Header';
import PhotoCarousel from './ProductDisplay';
import ProductDescription from './MainDescription';
import SloganDescription from './SecondaryDescription';
import RelatedStyles from './StyleSelector';
import './App.css';


const App = () => {

  const [ratings, setRatings] = useState(1);
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(5);
  const [currentStyle, setCurrentStyle] = useState([]);
  const [relatedStyles, setRelatedStyles] = useState([]);
  const [userId, setUserId] = useState(1236);
  const [userSessionData, setUserSessionData] = useState([]);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => setProductList(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getProductInfo(selectedProduct)
      .then((data) => setSelectedProduct(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getProductStyles(selectedProduct)
      .then((data) => setCurrentStyle([]))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getProductStyles(selectedProduct)
      .then((data) => setRelatedStyles(data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getCart(userId)
      .then((data) => setUserSessionData(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getRatings(selectedProduct)
      .then((data) => setRatings(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="body-kg">
      <Header className="headerStyle-kg" userSessionData={userSessionData}
      productList={productList}/>
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <div>
              <PhotoCarousel currentStyle={currentStyle} 
              currentProduct={selectedProduct}/>
            </div>
          </div>
          <div class="col-sm-4">
            <ProductDescription 
            selected={selectedProduct} 
            style={currentStyle}
            ratings={ratings}/>
            <RelatedStyles
            selectedStyleHandler={setCurrentStyle}
            selected={currentStyle}
            relatedStyles={relatedStyles}/>
            <AddItem productData={selectedProduct} 
            userId={userId} 
            styleData={currentStyle}
            updateCartHeader={setUserSessionData}/>
          </div>
        </div>
        <div class="row">
          <SloganDescription 
          selected={selectedProduct}
          style={currentStyle}/>
        </div>
      </div>
    </div>
  );
};

export default App;
