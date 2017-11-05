import { combineReducers } from 'redux';
import all from './allProductsReducer';
import page from './pageProductsReducer';
import sort from './sortProductsReducer';
import hasMore from './noMoreProductsReducer';

export default combineReducers({
  all,
  page,
  sort,
  hasMore,
});
