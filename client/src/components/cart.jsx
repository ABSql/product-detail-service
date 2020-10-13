import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Badge from '@material-ui/core/Badge';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Cart = ({userSessionData}) => {

  return (
    <div className="cart-kg">
      <Card />
        <Badge key={userSessionData.user_session}
        badgeContent={userSessionData.length}
        color="secondary"
        overlap="circle">
          <ShoppingBasketIcon fontSize="large" key={userSessionData.user_session}/>
        </Badge>
    </div>
  )
};

export default Cart;