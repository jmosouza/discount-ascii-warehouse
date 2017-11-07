import React from 'react';
import ProductGridItem from './ProductGridItem';
import { productCollectionPropTypes } from './productPropTypes';
import Ad from '../../ads/components/Ad';

const shouldInsertAd = index => (index + 1) % 20 === 0;

const ProductGrid = ({ products }) => (
  <div className="columns is-multiline">
    {products.map((product, index) => ([
      <ProductGridItem key={product.id} {...product} />,
      shouldInsertAd(index) && <Ad key={index} />,
    ]))}
  </div>
);

ProductGrid.propTypes = {
  products: productCollectionPropTypes.isRequired,
};

export default ProductGrid;
