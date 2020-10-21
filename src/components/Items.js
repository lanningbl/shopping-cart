import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Items.css';
import store from '../store';
import RoundImage from './RoundImage';

const Items = () => {
  const {
    state: { products, items },
    dispatch,
  } = useContext(store);

  const handleAddToCart = (item, e) => {
    e.preventDefault();

    dispatch({
      type: 'ADD_TO_CART',
      payload: item,
    });
  };

  const gridPrice = (regularPrice, salePrice) => {
    return (
      <div className='grid-price'>
        <span className='item-price'>
          ${salePrice ? salePrice.toFixed(2) : regularPrice.toFixed(2)}
        </span>
        {salePrice && <span className='item-save'>Save ${regularPrice - salePrice}</span>}
      </div>
    );
  };

  return (
    <div className='items'>
      <div className='top'>Items</div>
      {items.map((item) => {
        const { id, title, regularPrice, salePrice, color } = item;
        const product = products.find((product) => product.name === title);
        const images = product.images[color];
        return (
          <div className='item' key={id}>
            <RoundImage id={id} images={images} size={150} />
            <Link className='item__title' to={`/product/${id}`}>
              {title}
            </Link>
            <div className='item__details'>
              <div>{item.color}</div>
              <div>Processor: {item.processor}</div>
              <div>Storage: {item.storage}</div>
              <div>Memory: {item.memory}</div>
              <div>Graphics Card: {item.graphics}</div>
              <div>Configuration: {item.configuration}</div>
            </div>
            {gridPrice(regularPrice, salePrice)}
            <button className='add-to-cart__btn' onClick={(e) => handleAddToCart(item, e)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
