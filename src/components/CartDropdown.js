import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import './CartDropdown.css';
import store from '../store';
import RoundImage from './RoundImage';
import Cart from '../assets/svg/Cart';

const CartDropdown = () => {
  const {
    state: { products, cart },
  } = useContext(store);
  const [isOpen, setIsOpen] = useState(false);

  const numOfItemsInCart = () => {
    let numItems = 0;
    cart.forEach((item) => {
      numItems += item.quantity;
    });
    return numItems;
  };

  const verb = numOfItemsInCart() === 1 ? 'item' : 'items';

  return (
    <div
      className='cart-dropdown'
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link className='cart-dropdown-selector' to='/cart'>
        <Cart />
        {cart.length > 0 && <span className='cart-num-items'>{numOfItemsInCart()}</span>}My Cart
      </Link>
      {isOpen && (
        <div className='dropdown'>
          {cart.length > 0 ? (
            <>
              {numOfItemsInCart()} {verb} in cart
              {cart.map((item) => {
                const images = products.find((product) => product.name === item.title).images[
                  item.color
                ];
                return (
                  <div className='cart-dropdown-item' key={item.id}>
                    <RoundImage id={item.id} images={images} size={50} />
                    <div className='cart-dropdown__details'>
                      <Link to={`/product/${item.id}`}>
                        <span className='cart-dropdown-item-title'>{item.title}</span>
                      </Link>
                      <span className='cart-dropdown-item-qty'>Qty: {item.quantity}</span>
                    </div>
                  </div>
                );
              })}
              <Link className='cart-dropdown-btn' to='/cart' onClick={() => setIsOpen(false)}>
                View Cart & Begin Checkout
              </Link>
            </>
          ) : (
            <div className='cart-dropdown-empty'>Your cart is currently empty</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
