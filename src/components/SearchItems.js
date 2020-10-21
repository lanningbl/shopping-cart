import React, { useContext } from 'react';

import './SearchItems.css';
import store from '../store';

const SearchItems = () => {
  const { dispatch } = useContext(store);
  // advanced search?
  const filterItems = (category, option) => {
    console.log(
      'Eventually send all filters using useState to determine if ' +
        'something is filtered or not. This was just a quick test setup.'
    );
    dispatch({
      type: 'FILTER_ITEMS',
      category,
      option,
    });
  };

  return (
    <div className='search-items'>
      <div className='status'>
        Work in Process... Currently you can filter by 512GB and can only unfilter by refreshing the
        page
      </div>
      <div>Categories</div>
      <div className='search__storage'>
        Storage
        <div className='input-control'>
          <input type='checkbox' id='512GB' onClick={() => filterItems('storage', '512GB')} />
          <label htmlFor='512GB'>512GB</label>
        </div>
        <div className='input-control'>
          <input type='checkbox' id='1TB' />
          <label htmlFor='1TB'>1TB</label>
        </div>
        <div className='input-control'>
          <input type='checkbox' id='2TB' />
          <label htmlFor='2TB'>2TB</label>
        </div>
        <div className='input-control'>
          <input type='checkbox' id='4TB' />
          <label htmlFor='4TB'>4TB</label>
        </div>
        <div className='input-control'>
          <input type='checkbox' id='8TB' />
          <label htmlFor='8TB'>8TB</label>
        </div>
      </div>
      <div className='status'>SVG Icons from FontAwesome</div>
    </div>
  );
};

export default SearchItems;
