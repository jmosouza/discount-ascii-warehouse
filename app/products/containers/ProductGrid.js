import { connect } from 'react-redux';
import ProductGrid from '../ProductGrid';

const mapStateToProps = state => ({
  products: state.entities.products.all,
});

export default connect(
  mapStateToProps,
)(ProductGrid);
