/* global AD_HOST */

import React from 'react';
import PropTypes from 'prop-types';
import ProductGridItem from './ProductGridItem';
import { productCollectionPropTypes } from './productPropTypes';
import Ad from '../../ads/components/Ad';

const ProductGrid = ({ products }) => (
  <div className="columns is-multiline">
    {products.reduce((array, product, index) => {
      const productGridItem = ProductGridItem(product);
      let ad;
      if ((index + 1) % 20 === 0) {
        // TODO: Needs better random
        const random = index;
        ad = <Ad random={random} />;
      }
      return array.concat(productGridItem, ad);
    }, [])}
  </div>
);

ProductGrid.propTypes = {
  products: productCollectionPropTypes.isRequired,
};

export default ProductGrid;
