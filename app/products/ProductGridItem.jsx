import React from 'react';
import ProductFace from './components/ProductFace';
import ProductSize from './components/ProductSize';
import ProductPrice from './components/ProductPrice';
import ProductDate from './components/ProductDate';
import productPropTypesShape from './productPropTypesShape';

const ProductGridItem = ({
  id, size, price, face, date,
}) => (
  <div key={id}>
    <ProductFace face={face} size={size} />
    <ProductSize size={size} />
    <ProductPrice price={price} />
    <ProductDate date={date} />
  </div>
);

ProductGridItem.propTypes = productPropTypesShape;

export default ProductGridItem;
