import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import ProductGrid from '../../products/components/ProductGrid';
import ProductSort from '../../products/components/ProductSort';
import { productCollectionPropTypes } from '../../products/components/productPropTypes';

class AsciiStore extends Component {
  constructor(props) {
    super(props);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  handleLoadMore(page) {
    // this.props.pageProducts(this.props.currentPage + 1);
  }

  render() {
    return (
      <div>
        <header>
          <h1>Ascii Faces</h1>
        </header>
        <ProductSort
          sort={this.props.currentSort}
          onSort={this.props.sortProducts}
        />
        <InfiniteScroll
          pageStart={-1}
          hasMore={this.props.hasMoreProducts}
          loadMore={this.handleLoadMore}
          loader={<div>Loading...</div>}
        >
          <ProductGrid products={this.props.products} />
        </InfiniteScroll>
        {this.props.hasMoreProducts || <div>~ end of catalogue ~</div>}
      </div>
    );
  }
}

AsciiStore.propTypes = {
  products: productCollectionPropTypes.isRequired,
  currentPage: PropTypes.number.isRequired,
  currentSort: PropTypes.string.isRequired,
  hasMoreProducts: PropTypes.bool.isRequired,
  pageProducts: PropTypes.func.isRequired,
  sortProducts: PropTypes.func.isRequired,
};

export default AsciiStore;
