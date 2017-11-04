/* global test, expect */
import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import ProductGrid from '../ProductGrid';
import sampleProducts from '../../__test__/sampleProducts';

const initialState = {
  entities: {
    products: {
      all: sampleProducts,
    },
  },
};

const mockStore = configureStore();
const store = mockStore(initialState);

test('ProductGrid', () => {
  expect(renderer.create(
    <ProductGrid store={store} />,
  )).toMatchSnapshot();
});
