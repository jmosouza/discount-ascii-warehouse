import React from 'react';
import PropTypes from 'prop-types';

const sortOptions = ['id', 'price', 'size'];

const ProductSort = ({ onSort }) => (
  <div>
    Sort:
    {sortOptions.map(option => (
      <button key={option} onClick={() => onSort(option)}>
        {option}
      </button>
    ))}
  </div>
);

ProductSort.propTypes = {
  onSort: PropTypes.func.isRequired,
};

export default ProductSort;
