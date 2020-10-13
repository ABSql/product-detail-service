import React from 'react';
import Cart from './Cart';
import Searchbar from './Searchbar';

const Header = ({userSessionData, productId, productList}) => (
  <div id="header-style-kg">
    <div className="box-style-kg">
      <h2 className="header-logo-kg">t h r 3 d s</h2>
      <p>what's fresher than fresh? hygenic.</p>
    </div>
    <div>
      <div id="searchbar-kg">
          <Searchbar products={productList}/>
      </div>
    </div>
      <div id="cart-display-kg">
        <Cart userSessionData={userSessionData} productId={productId}/>
      </div>
  </div>
);

export default Header; 