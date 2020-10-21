import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { StoreProvider } from './store';
import Navigation from './layouts/Navigation';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <Router>
      <StoreProvider>
        <Navigation />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/product/:id' component={Product} />
            <Route exact path='/checkout' component={Checkout} />
          </Switch>
        </div>
      </StoreProvider>
    </Router>
  );
};

export default App;
