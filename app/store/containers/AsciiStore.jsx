import { connect } from 'react-redux';
import pageProducts from '../../products/actions/pageProducts';
import sortProducts from '../../products/actions/sortProducts';
import fetchProducts from '../../products/actions/fetchProducts';
import AsciiStore from '../components/AsciiStore';

const mapStateToProps = (state) => {
  const products = Object.values(state.products.all);
  return {
    products,
    currentPage: state.products.page,
    currentSort: state.products.sort,
    hasMoreProducts: state.products.hasMore,
  };
};

const mapDispatchToProps = dispatch => ({
  pageProducts: (page) => {
    dispatch(pageProducts(page));
    dispatch(fetchProducts());
  },
  sortProducts: (sort) => {
    dispatch(sortProducts(sort));
    dispatch(fetchProducts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AsciiStore);
