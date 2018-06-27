import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';

import store from './redux/store/store';
import AppWrapper, { history } from './components/AppWrapper';

import './styles/styles.scss';

const jsx = (
  <Provider store={store}>
    <Router history={history}>
      <Route to="/" component={AppWrapper} exact={true} />
    </Router>
  </Provider>
);

ReactDOM.render( jsx, document.getElementById('app') );
