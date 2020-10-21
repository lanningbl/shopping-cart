import React from 'react';

import './ProductOptions.css';
import MacBookPro16Late2019 from './specs/MacBookPro16Late2019';

const ProductOptions = ({ item, product }) => {
  switch (item.title) {
    case 'Apple 16" MacBook Pro':
      return <MacBookPro16Late2019 item={item} product={product} />;
    default:
      return <div></div>;
  }
};

export default ProductOptions;
