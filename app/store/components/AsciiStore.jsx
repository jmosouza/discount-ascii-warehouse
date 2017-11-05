import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductGrid from '../../products/components/ProductGrid';
import { productCollectionPropTypes } from '../../products/components/productPropTypes';

class AsciiStore extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div>
        <header>
          <h1>Ascii Faces</h1>
        </header>
        <ProductGrid products={this.props.products} />
      </div>
    );
  }
}

AsciiStore.propTypes = {
  products: productCollectionPropTypes.isRequired,
  fetchProducts: PropTypes.func.isRequired,
};

export default AsciiStore;
