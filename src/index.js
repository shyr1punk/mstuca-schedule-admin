import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import Dashboard from './screens/Dashboard/Dashboard';
import Group from './screens/Group/Group';
import NoMatch from './screens/NoMatch/NoMatch';
import './index.css';
import store from './store';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="/group/:groupId" component={Group} />
        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
