import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Cart.css';
import store from '../store';
import RoundImage from '../components/RoundImage';
import CartItemQuantityInput from '../components/CartItemQuantityInput';
import Trash from '../assets/svg/Trash';

const Cart = () => {
  const {
    state: { cart, total, products },
    dispatch,
  } = useContext(store);

  const handleRemoveOneFromCart = (item) => {
    dispatch({
      type: 'REMOVE_ONE_OF_ITEM_FROM_CART',
      payload: item,
    });
  };

  const handleRemoveFromCart = (id) => {
    dispatch({
      type: 'REMOVE_ITEM_FROM_CART',
      payload: { id },
    });
  };

  return (
    <div className='cart'>
      <div className='top'>My Cart</div>
      <div className='cart-item'>
        <div className='cart-item__product'>Item</div>
        <div className='cart-item__price'>Price</div>
        <div className='cart-item__quantity'>Quantity</div>
        <div className='cart-item__total'>Total</div>
      </div>
      {cart.map((item) => {
        const images = products.find((product) => product.name === item.title).images[item.color];
        return (
          <div className='cart-item' key={item.id}>
            <RoundImage id={item.id} images={images} size={80} />
            <div className='cart-item__details'>
              <Link className='cart-item__title' to={`/product/${item.id}`}>
                {item.title}
              </Link>
              <div className='cart-item__price'>
                ${item.salePrice ? item.salePrice : item.regularPrice}
              </div>
              <CartItemQuantityInput id={item.id} qty={item.quantity} />
              <div className='cart-item__total'>
                $
                {item.salePrice
                  ? item.salePrice * item.quantity
                  : item.regularPrice * item.quantity}
              </div>
            </div>
            <Trash onClick={() => handleRemoveFromCart(item.id)} />
          </div>
        );
      })}
      <div className='cart-item'>
        <div className='cart-item__total'>${total}</div>
      </div>
      <div className='cart-action-btns'>
        <Link className='cart__continue-shopping-btn' to='/'>
          Continue Shopping
        </Link>
        {cart.length > 0 && (
          <Link className='cart__checkout-btn' to='/checkout'>
            Checkout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
