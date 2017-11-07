import React from 'react';
import ProductFace from './ProductFace';
import ProductSize from './ProductSize';
import ProductPrice from './ProductPrice';
import ProductDate from './ProductDate';
import { productPropTypes } from './productPropTypes';

const ProductGridItem = ({
  id, size, price, face, date,
}) => (
  <div id={id} className="column is-6">
    <div className="card has-text-centered">
      <div className="card-content" style={{ height: 100 }}>
        <p className="title">
          <ProductFace face={face} size={size} />
        </p>
      </div>
      <div className="card-footer" style={{ height: 50 }}>
        <p className="card-footer-item">
          <ProductDate date={date} />
        </p>
        <p className="card-footer-item">
          <a><ProductPrice price={price} /></a>
        </p>
      </div>
    </div>
  </div>
);

ProductGridItem.propTypes = productPropTypes;

export default ProductGridItem;
