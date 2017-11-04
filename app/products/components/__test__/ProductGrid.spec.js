/* global test, expect */
import renderer from 'react-test-renderer';
import React from 'react';
import ProductGrid from '../ProductGrid';
import products from './sampleProducts';

test('ProductGrid', () => {
  expect(renderer.create(
    <ProductGrid products={products} />,
  )).toMatchSnapshot();
});
