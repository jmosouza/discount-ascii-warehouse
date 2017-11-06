import React from 'react';
import PropTypes from 'prop-types';

const ProductFace = ({ size, face }) => (
  <span style={{ fontSize: size }}>{face}</span>
);

ProductFace.propTypes = {
  size: PropTypes.number.isRequired,
  face: PropTypes.string.isRequired,
};

export default ProductFace;
