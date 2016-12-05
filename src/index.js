import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Products from './pages/Products';
import About from './pages/About';
import Home from './pages/Home';

import App from './App';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/about" component={About} />
    </Route>
  </Router>,
  document.getElementById('root')
);
