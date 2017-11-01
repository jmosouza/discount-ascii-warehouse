import React from 'react';
import PropTypes from 'prop-types';
import relativeDateInterval from '../../utils/relativeDateInterval';

const ProductDate = ({ date }) => (
  <p>{relativeDateInterval({ dateStr: date })}</p>
);

ProductDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default ProductDate;
