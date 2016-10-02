import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from './screens/Dashboard/Dashboard';
import Group from './screens/Group/Group';
import NoMatch from './screens/NoMatch/NoMatch';
import './index.css';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/group/:groupId" component={Group} />
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
