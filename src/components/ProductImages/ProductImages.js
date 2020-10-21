import React, { useState, useEffect } from 'react';

import './ProductImages.css';

const ProductImages = ({ title, images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    setCurrentImage(images[0]);
  }, [images]);

  return (
    <div className='product-images'>
      <div className='product-images__list'>
        {images.map((image, index) => (
          <img
            className='product-images__small-image'
            key={index}
            src={image}
            alt={title}
            onMouseOver={() => setCurrentImage(image)}
          />
        ))}
      </div>
      <div className='product-images__image-container'>
        <img className='product-images__image' src={currentImage} alt={title} />
      </div>
    </div>
  );
};

export default ProductImages;
