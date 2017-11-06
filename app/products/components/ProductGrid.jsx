/* global AD_HOST */

import React from 'react';
import PropTypes from 'prop-types';
import ProductGridItem from './ProductGridItem';
import { productCollectionPropTypes } from './productPropTypes';

const ProductGrid = ({ products }) => (
  <div className="columns is-multiline">
    {products.reduce((array, product, index) => {
      const productGridItem = ProductGridItem(product);
      let ad;
      if ((index + 1) % 20 === 0) {
        // TODO: Needs better random
        const random = index;
        ad = (
          <div key={random} className="column is-one-third">
            <div className="card">
              <div className="card-image">
                <figure className="image is-clipped" style={{ height: 150 }}>
                  <img
                    alt="Ad"
                    className="ad"
                    src={`${AD_HOST}/ad?r=${random}`}
                  />
                </figure>
              </div>
            </div>
          </div>
      );
      }
      return array.concat(productGridItem, ad);
    }, [])}
  </div>
);

ProductGrid.propTypes = {
  products: productCollectionPropTypes.isRequired,
};

export default ProductGrid;
