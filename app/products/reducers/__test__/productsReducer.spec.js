/* global test, expect */

import rootReducer from '../../../redux/rootReducer';
import { fetchProductsSuccess } from '../../actions/fetchProducts';
import sampleProducts from '../../components/__test__/sampleProducts';

[
  { type: 'UNKNOWN ACTION' },
  fetchProductsSuccess(sampleProducts[0]),
].forEach((action) => {
  test(`Dispatch ${action.type}`, () => {
    expect(rootReducer(undefined, action)).toMatchSnapshot();
  });
});
