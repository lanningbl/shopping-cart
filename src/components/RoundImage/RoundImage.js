import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './RoundImage.css';

const RoundImage = ({ id, images, size = 100 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const useImage = () => {
    if (images.length === 1 || !isHovered) return images[0];
    return images[1];
  };

  return (
    <Link
      className='round-image'
      style={{
        backgroundImage: `url(${useImage()})`,
        backgroundSize: `${size * 0.7}px`,
        height: `${size}px`,
        width: `${size}px`,
      }}
      to={`/product/${id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default RoundImage;
