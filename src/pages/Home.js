import React from 'react';

import SearchItems from '../components/SearchItems';
import Items from '../components/Items';

const Home = () => {
  return (
    <div className='home'>
      <SearchItems />
      <Items />
    </div>
  );
};

export default Home;
