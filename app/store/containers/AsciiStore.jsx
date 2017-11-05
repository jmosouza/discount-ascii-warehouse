import { connect } from 'react-redux';
import fetchProducts from '../../products/actions/fetchProducts';
import AsciiStore from '../components/AsciiStore';

const mapStateToProps = (state) => {
  const products = Object.values(state.products.all);
  return {
    products,
    hasMoreProducts: state.products.hasMore,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: ({ skip }) => dispatch(fetchProducts({ skip })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AsciiStore);
