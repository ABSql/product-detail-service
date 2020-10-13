import React from 'react';

const AddItemButton = ({addToCart}) => {

    return(
    <>
      <button id="button-kg" type="submit" 
      onClick={() => addToCart()}>Add To Bag +</button>
    </>
  )
};

export default AddItemButton;
