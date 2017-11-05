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
    // TODO: perPage should be in config file
    const perPage = 10;
    const skip = page * perPage;
    this.props.fetchProducts({ skip });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Ascii Faces</h1>
        </header>
        {/* TODO: hasMore should be in props */}
        <InfiniteScroll
          hasMore
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
};

export default AsciiStore;
