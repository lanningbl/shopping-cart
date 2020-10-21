import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';
import CartDropdown from '../components/CartDropdown';

const Navigation = () => {
  return (
    <div className='navigation'>
      <Link className='home-link' to='/'>
        Home
      </Link>
      <CartDropdown />
    </div>
  );
};

export default Navigation;
