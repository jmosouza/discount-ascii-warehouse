import React from 'react';
import PropTypes from 'prop-types';
import ProductGridItem from './ProductGridItem';
import { productCollectionPropTypes } from './productPropTypes';

const ProductGrid = ({ products }) => (
  Object.values(products).map(ProductGridItem)
);

ProductGrid.propTypes = {
  products: productCollectionPropTypes,
};

export default ProductGrid;
