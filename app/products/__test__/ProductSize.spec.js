/* global test, expect */
import renderer from 'react-test-renderer';
import React from 'react';
import ProductSize from '../ProductSize';

test('ProductSize', () => {
  expect(renderer.create(
    <ProductSize
      size={12}
    />,
  )).toMatchSnapshot();
});
