/* global test, expect */
import renderer from 'react-test-renderer';
import React from 'react';
import ProductGridItem from '../ProductGridItem';
import mockDateDotNow from '../../__test__/mockDateDotNow';

mockDateDotNow();

test('ProductGridItem', () => {
  const product = {
    id: '0-8gbbh9bm9qc',
    size: 22,
    price: 27,
    face: '( .-. )',
    date: 'Mon Oct 23 2017 11:00:00 GMT-0000 (-00)',
  };
  expect(renderer.create(
    <ProductGridItem {...product} />,
  )).toMatchSnapshot();
});
