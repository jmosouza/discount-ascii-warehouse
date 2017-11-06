import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductGrid from '../../products/components/ProductGrid';
import ProductSort from '../../products/components/ProductSort';
import Loading from '../../elements/Loading';
import EndOfCatalogue from '../../elements/EndOfCatalogue';
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
    const {
      currentSort,
      sortProducts,
      products,
      isLoadingProducts,
      hasMoreProducts,
    } = this.props;

    return (
      <section className="section">
        <div className="container">
          <header>
            <h1>Ascii Faces</h1>
          </header>
          <ProductSort
            sort={currentSort}
            onSort={sortProducts}
          />
          <ProductGrid products={products} />
          {isLoadingProducts && <Loading />}
          {hasMoreProducts || <EndOfCatalogue />}
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
