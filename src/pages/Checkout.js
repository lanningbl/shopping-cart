import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Checkout.css';
import store from '../store';
import RoundImage from '../components/RoundImage';

const Checkout = () => {
  const {
    state: { cart, total, products },
    dispatch,
  } = useContext(store);

  const handleCheckout = () => {
    dispatch({
      type: 'CHECKOUT',
    });
  };

  return (
    <div className='cart'>
      <div className='top'>Checkout</div>
      <div className='checkout-item'>
        <div className='checkout-item__product'>Item</div>
        <div className='checkout-item__price'>Price</div>
        <div className='checkout-item__quantity'>Quantity</div>
        <div className='checkout-item__total'>Total</div>
      </div>
      {cart.map((item) => {
        const images = products.find((product) => product.name === item.title).images[item.color];
        return (
          <div className='checkout-item' key={item.id}>
            <RoundImage id={item.id} images={images} size={80} />
            <div className='checkout-item__details'>
              <Link className='checkout-item__title' to={`/product/${item.id}`}>
                {item.title}
              </Link>
              <div className='checkout-item__price'>
                ${item.salePrice ? item.salePrice : item.regularPrice}
              </div>
              <div className='checkout-item__quantity'>{item.quantity}</div>
              <div className='checkout-item__total'>
                $
                {item.salePrice
                  ? item.salePrice * item.quantity
                  : item.regularPrice * item.quantity}
              </div>
            </div>
          </div>
        );
      })}
      <div className='checkout-item'>
        <div className='checkout-item__total'>${total}</div>
      </div>
      <div className='checkout-action-btns'>
        <Link className='cart__continue-shopping-btn' to='/cart'>
          Back to Cart
        </Link>
        <Link className='cart__checkout-btn' to='/' onClick={handleCheckout}>
          Place Order
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
