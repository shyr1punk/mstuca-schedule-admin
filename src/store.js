import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import groupReducer from './reducers/groupReducer';

export default createStore(combineReducers({
    groupReducer
  }),
  applyMiddleware(thunk)
);
