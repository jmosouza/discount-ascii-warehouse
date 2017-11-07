/* global test, expect */

import rootReducer from '../../../redux/rootReducer';
import { fetchProductsNoMore } from '../../actions/fetchProducts';

[
  { type: 'UNKNOWN ACTION' },
  fetchProductsNoMore(),
].forEach((action) => {
  test(`Dispatch ${action.type}`, () => {
    expect(rootReducer(undefined, action)).toMatchSnapshot();
  });
});
