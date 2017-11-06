import React from 'react';
import PropTypes from 'prop-types';

const ProductSize = ({ size }) => (
  <span>Size: {size}</span>
);

ProductSize.propTypes = {
  size: PropTypes.number.isRequired,
};

export default ProductSize;
