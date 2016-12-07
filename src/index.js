import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import ga from 'react-ga';
import routes from './routes';
import configureStore from './configureStore';

if (process.env.NODE_ENV === 'production' && process.env.GA_ID) {
  ga.initialize(process.env.GA_ID);
}

const logPageView = () => ga.pageview(window.location.pathname);

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
      onUpdate={logPageView}
    />
  </Provider>,
  document.getElementById('root')
);
