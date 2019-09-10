import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import anecdoteReducer from '../reducers/anecdoteReducer.js';
import notificationReducer from '../reducers/notificationReducer.js';
import filterReducer from '../reducers/filterReducer';

const reducers = combineReducers({
  anecdoteState: anecdoteReducer,
  filterState: filterReducer,
  notificationState: notificationReducer
});
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;