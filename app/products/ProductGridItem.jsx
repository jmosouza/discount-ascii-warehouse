import React from 'react';
import PropTypes from 'prop-types';
import ProductFace from './ProductFace';
import ProductSize from './ProductSize';
import ProductPrice from './ProductPrice';
import ProductDate from './ProductDate';

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
