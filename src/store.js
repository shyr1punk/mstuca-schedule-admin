import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import groupReducer from './reducers/groupReducer';
import specialityReducer from './reducers/specialityReducer';

export default createStore(combineReducers({
    groupReducer,
    specialityReducer
  }),
  applyMiddleware(thunk)
);
