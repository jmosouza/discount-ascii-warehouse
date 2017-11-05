import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import ProductGrid from '../../products/components/ProductGrid';
import { productCollectionPropTypes } from '../../products/components/productPropTypes';

class AsciiStore extends Component {
  constructor(props) {
    super(props);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  handleLoadMore(page = 0) {
    this.props.fetchProducts({ page });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Ascii Faces</h1>
        </header>
        {/* TODO: hasMore should be in props */}
        <InfiniteScroll
          hasMore={this.props.hasMoreProducts}
          loadMore={this.handleLoadMore}
          loader={<div>Loading...</div>}
        >
          <ProductGrid products={this.props.products} />
        </InfiniteScroll>
      </div>
    );
  }
}

AsciiStore.propTypes = {
  products: productCollectionPropTypes.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  hasMoreProducts: PropTypes.bool.isRequired,
};

export default AsciiStore;
