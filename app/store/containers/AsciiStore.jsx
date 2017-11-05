import { connect } from 'react-redux';
import fetchProducts from '../../products/actions/fetchProducts';
import AsciiStore from '../components/AsciiStore';

const mapStateToProps = (state) => {
  const products = Object.values(state.products.all);
  return {
    products,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AsciiStore);
