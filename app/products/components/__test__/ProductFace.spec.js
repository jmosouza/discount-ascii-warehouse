/* global test, expect */
import renderer from 'react-test-renderer';
import React from 'react';
import ProductFace from '../ProductFace';

test('ProductFace', () => {
  expect(renderer.create(
    <ProductFace
      face="¯_(ツ)_/¯"
      size={12}
    />,
  )).toMatchSnapshot();
});
