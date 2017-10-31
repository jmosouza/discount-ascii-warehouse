/* global test, expect */
import renderer from 'react-test-renderer';
import React from 'react';
import ProductGridItem from '../ProductGridItem';

test('ProductGridItem', () => {
  const product = {
    id: '0-8gbbh9bm9qc',
    size: 22,
    price: 27,
    face: '( .-. )',
    date: 'Mon Oct 23 2017 11:23:20 GMT-0300 (-03)',
  };
  expect(renderer.create(
    <ProductGridItem {...product} />,
  )).toMatchSnapshot();
});
