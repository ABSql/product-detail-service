import React, { useState } from 'react';
import AddItemButton from './buttons/AddItemButton';
import QuantityButton from './buttons/QuantitySelector';
import SelectSizeButton from './buttons/SizeSelector';
import addToCart from '../API/PostCart.js';
import getCart from '../API/GetCart';

const AddItem = ({productData, userId, styleData, updateCartHeader}) => {
  const name = styleData.name;
  const price = styleData.original_price - styleData.sale_price;
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(0)
  
  console.log('style skus: ', styleData.skus);
  
  const addToCartHandler = () => {
    const userSessionData = {
      user_session: userId,
      product_id: productData.id,
    };
    
    addToCart(userSessionData)
    .then((res) => console.log(res))
    .then(() => getCart(userId))
    .then((data) => updateCartHeader(data));
  }
  
  const cartValues = {
    name: name,
    price: price, 
    size: selectedSize,
    quantity: quantity,
    added: false,
    total_price: (price * quantity),
  };

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <SelectSizeButton sizes={styleData} 
            sizeSelector={setSelectedSize}
            size={selectedSize}/>
          </div>
          <div class="col-md-4">
            {selectedSize ? <QuantityButton quantities={styleData}
            quantitySelector={setQuantity}
            size={selectedSize}/> : <div></div>}
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            {selectedSize && quantity > 0 ? <AddItemButton cartValues={cartValues} 
            addToCart={addToCartHandler}/> 
            : <div class="col-md-12">
                <button id="button-kg" type="submit"
                onClick={() => alert`Please select your style, size, and quantity.`}>Select Product Details</button>
              </div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default AddItem;