import React, { useContext, useState } from 'react';

import './CartItemQuantityInput.css';
import store from '../store';

const CartItemQuantityInput = ({ id, qty }) => {
  const { dispatch } = useContext(store);
  const [quantity, setQuantity] = useState(qty);

  const updateQuantity = () => {
    console.log(quantity);
    if (qty === quantity) return;

    let data = { id, quantity };

    dispatch({
      type: 'UPDATE_CART_ITEM_QUANTITY',
      payload: data,
    });
  };

  return (
    <div className='cart-item-input'>
      <input
        className='cart-item-quantity-input'
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      {qty !== quantity && (
        <button className='cart-item-quantity-input__btn' onClick={() => updateQuantity()}>
          Update
        </button>
      )}
    </div>
  );
};

export default CartItemQuantityInput;
