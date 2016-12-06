import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import ga from 'react-ga';

import Products from './pages/Products';
import About from './pages/About';
import Home from './pages/Home';

import App from './App';
import './index.css';

if (process.env.NODE_ENV === 'production' && process.env.GA_ID) {
  ga.initialize(process.env.GA_ID);
}

const logPageView = () => ga.pageview(window.location.pathname);

ReactDOM.render(
  <Router history={browserHistory} onUpdate={logPageView}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/about" component={About} />
    </Route>
  </Router>,
  document.getElementById('root')
);
