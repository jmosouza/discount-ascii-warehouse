/* global test, expect */
import renderer from 'react-test-renderer';
import React from 'react';
import ProductDate from '../ProductDate';

test('ProductDate', () => {
  expect(renderer.create(
    <ProductDate
      date="Mon Oct 23 2017 11:23:20 GMT-0300 (-03)"
    />,
  )).toMatchSnapshot();
});
