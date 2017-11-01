import PropTypes from 'prop-types';
import ProductGridItem from './ProductGridItem';
import productPropTypesShape from './productPropTypesShape';

const ProductGrid = ({ products }) => (
  Object.values(products).map(ProductGridItem)
);

ProductGrid.propTypes = {
  products: PropTypes.objectOf(
    PropTypes.shape(productPropTypesShape),
  ).isRequired,
};

export default ProductGrid;
