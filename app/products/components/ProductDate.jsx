import React from 'react';
import PropTypes from 'prop-types';
import relativeDateInterval from '../../utils/relativeDateInterval';

const ProductDate = ({ date }) => (
  <span>{relativeDateInterval({ dateStr: date })}</span>
);

ProductDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default ProductDate;
