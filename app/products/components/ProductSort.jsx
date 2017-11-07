import React from 'react';
import PropTypes from 'prop-types';
import ProductSortOption from './ProductSortOption';

const sortOptions = ['id', 'price', 'size'];

const ProductSort = ({ selectedOption, onSort }) => (
  <div className="level">
    <div className="level-left has-text-centered">
      <span className="level-item">Sort:</span>
      {sortOptions.map(option => (
        <ProductSortOption
          key={option}
          option={option}
          onSort={onSort}
          selected={option === selectedOption}
        />
    ))}
    </div>
  </div>
);

ProductSort.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default ProductSort;
