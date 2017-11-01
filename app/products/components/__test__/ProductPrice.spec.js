/* global test, expect */
import renderer from 'react-test-renderer';
import React from 'react';
import ProductPrice from '../ProductPrice';

test('ProductPrice', () => {
  expect(renderer.create(
    <ProductPrice
      price={123}
    />,
  )).toMatchSnapshot();
});
