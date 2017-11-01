import React from 'react';
import PropTypes from 'prop-types';
import ProductFace from './components/ProductFace';
import ProductSize from './components/ProductSize';
import ProductPrice from './components/ProductPrice';
import ProductDate from './components/ProductDate';

const ProductGridItem = ({
  size, price, face, date,
}) => (
  <div>
    <ProductFace face={face} size={size} />
    <ProductSize size={size} />
    <ProductPrice price={price} />
    <ProductDate date={date} />
  </div>
);

ProductGridItem.propTypes = {
  size: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  face: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ProductGridItem;
