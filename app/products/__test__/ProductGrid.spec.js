/* global test, expect */
import renderer from 'react-test-renderer';
import React from 'react';
import ProductGrid from '../ProductGrid';
import mockDateDotNow from '../../__test__/mockDateDotNow';
import products from './sampleProducts';

mockDateDotNow();

test('ProductGrid', () => {
  expect(renderer.create(
    <ProductGrid products={products} />,
  )).toMatchSnapshot();
});
