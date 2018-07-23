import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import store from './redux/store/store';
import AppWrapper, { history } from './components/AppWrapper';
import Copyright from './components/Copyright';

import './styles/styles.scss';

const jsx = (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={AppWrapper} exact={true} />
        <Route path="/copyright" component={Copyright} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render( jsx, document.getElementById('app') );
