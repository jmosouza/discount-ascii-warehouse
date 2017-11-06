import React from 'react';
import PropTypes from 'prop-types';

const ProductSortOption = ({ onSort, option, selected }) => (
  <button
    key={option}
    className={`level-item button ${selected ? 'is-dark' : 'is-text'}`}
    onClick={() => onSort(option)}
  >
    {option}
  </button>
);

ProductSortOption.propTypes = {
  onSort: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default ProductSortOption;
