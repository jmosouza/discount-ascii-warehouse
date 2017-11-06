import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductGrid from '../../products/components/ProductGrid';
import ProductSort from '../../products/components/ProductSort';
import { productCollectionPropTypes } from '../../products/components/productPropTypes';

class AsciiStore extends Component {
  constructor(props) {
    super(props);
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();

    window.onscroll = () => {
      const preloadOffset = 2000;
      const bottomEdge = document.body.scrollHeight;
      const scrollBottom = window.scrollY + window.innerHeight;
      const didReachBottom = scrollBottom + preloadOffset >= bottomEdge;
      const isLoading = this.props.isLoadingProducts;
      if (didReachBottom && !isLoading) {
        this.fetchProducts();
      }
    };
  }

  fetchProducts() {
    console.log(this.props.currentPage);
    this.props.pageProducts(this.props.currentPage + 1);
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <header>
            <h1>Ascii Faces</h1>
          </header>
          <ProductSort
            sort={this.props.currentSort}
            onSort={this.props.sortProducts}
          />
          <ProductGrid products={this.props.products} />
          {this.props.isLoadingProducts && <div>loading...</div>}
          {this.props.hasMoreProducts || <div>~ end of catalogue ~</div>}
        </div>
      </section>
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
