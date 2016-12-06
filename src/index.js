import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import ga from 'react-ga';
import routes from './routes';

if (process.env.NODE_ENV === 'production' && process.env.GA_ID) {
  ga.initialize(process.env.GA_ID);
}

const logPageView = () => ga.pageview(window.location.pathname);

ReactDOM.render(
  <Router
    history={browserHistory}
    routes={routes}
    onUpdate={logPageView}
  />,
  document.getElementById('root')
);
