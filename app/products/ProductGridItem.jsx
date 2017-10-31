import React from 'react';
import PropTypes from 'prop-types';
import ProductFace from './ProductFace';

const ProductGridItem = ({
  id, size, price, face, date,
}) => (
  <div>
    <ProductFace face={face} size={size} />
    {/* <ProductSize size={size} /> */}
    {/* <ProductPrice price={price} /> */}
    {/* <ProductDate date={date} /> */}
  </div>
);

ProductGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  face: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ProductGridItem;
