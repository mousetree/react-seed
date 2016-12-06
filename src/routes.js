import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app/App';

import Products from './pages/Products';
import About from './pages/About';
import Home from './pages/Home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/about" component={About} />
  </Route>
);
