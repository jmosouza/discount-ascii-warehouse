import { combineReducers } from 'redux';
import all from './allProductsReducer';
import hasMore from './noMoreProductsReducer';

export default combineReducers({
  all,
  hasMore,
});
