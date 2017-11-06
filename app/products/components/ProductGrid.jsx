import React from 'react';
import ProductGridItem from './ProductGridItem';
import { productCollectionPropTypes } from './productPropTypes';
import Ad from '../../ads/components/Ad';

const shouldInsertAd = index => (index + 1) % 20 === 0;

const ProductGrid = ({ products }) => (
  <div className="columns is-multiline">
    {products.reduce((array, product, index) => array.concat(
      <ProductGridItem {...product} />,
      shouldInsertAd(index) && <Ad />,
    ), [])}
  </div>
);

ProductGrid.propTypes = {
  products: productCollectionPropTypes.isRequired,
};

export default ProductGrid;
