import React from 'react';
import PropTypes from 'prop-types';

const ProductPrice = ({ price }) => (
  <span>${price.toFixed(2)}</span>
);

ProductPrice.propTypes = {
  price: PropTypes.number.isRequired,
};

export default ProductPrice;
