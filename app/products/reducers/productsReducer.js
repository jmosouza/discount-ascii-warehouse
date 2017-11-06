import { combineReducers } from 'redux';
import all from './allProductsReducer';
import page from './pageProductsReducer';
import sort from './sortProductsReducer';
import loading from './loadingProductsReducer';
import hasMore from './noMoreProductsReducer';

export default combineReducers({
  all,
  page,
  sort,
  loading,
  hasMore,
});
