import React, { useContext, useState } from 'react';

import './Product.css';
import store from '../store';
import ProductImages from '../components/ProductImages';
import ProductOptions from '../components/ProductOptions';

const Product = ({ location }) => {
  const { state, dispatch } = useContext(store);
  const itemId = parseInt(location.pathname.substring(location.pathname.lastIndexOf('/') + 1));
  const item = state.items.find((item) => item.id === itemId);
  const product = state.products.find((product) => product.name === item.title);

  const handleAddToCart = (item, e) => {
    e.preventDefault();

    dispatch({
      type: 'ADD_TO_CART',
      payload: item,
    });
  };

  return (
    <div className='product'>
      <div className='product__header'>
        <div className='product__title'>{item.title}</div>
        <span className='product__subtitle'>
          MFR #{item.mfr} | * * * * * 23 reviews | 32 Questions, 60 Answers
        </span>
      </div>
      <ProductImages title={item.title} images={product.images[item.color]} />
      <div className='product__details'>
        <span className='product__stock'>{item.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
        <div className='product__price'>${item.salePrice ? item.salePrice : item.regularPrice}</div>
        <div className='product__cart-info'>
          <div className='product__add-btn' onClick={(e) => handleAddToCart(item, e)}>
            Add to Cart
          </div>
        </div>
        Features
        <ul className='product__features'>
          <li className='product__feature'>{item.color}</li>
          <li className='product__feature'>{item.processor}</li>
          <li className='product__feature'>{item.storage} Storage (SSD)</li>
          <li className='product__feature'>{item.memory} of Memory</li>
          <li className='product__feature'>{item.graphics}</li>
          <li className='product__feature'>{item.configuration}</li>
        </ul>
        <div className='product__desc'>{item.desc}</div>
      </div>
      <ProductOptions item={item} product={product} />
    </div>
  );
};

export default Product;
