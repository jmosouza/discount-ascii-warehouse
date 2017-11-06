/* global AD_HOST */

import React from 'react';
import PropTypes from 'prop-types';
import ProductGridItem from './ProductGridItem';
import { productCollectionPropTypes } from './productPropTypes';

const ProductGrid = ({ products }) => (
  products.reduce((array, product, index) => {
    const productGridItem = ProductGridItem(product);
    let ad;
    if ((index + 1) % 20 === 0) {
      // TODO: Needs better random
      const random = index;
      ad = (<img
        key={random}
        alt="Ad"
        className="ad"
        src={`${AD_HOST}/ad?r=${random}`}
      />);
    }
    return array.concat(productGridItem, ad);
  }, [])
);

ProductGrid.propTypes = {
  products: productCollectionPropTypes.isRequired,
};

export default ProductGrid;
