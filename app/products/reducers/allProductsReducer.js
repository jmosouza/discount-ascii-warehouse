export default (all = {}, action) => {
  switch (action.type) {
    case 'PRODUCTS::FETCH_SUCCEEDED':
      return {
        ...all,
        [action.product.id]: action.product,
      };
    case 'PRODUCTS::SORT':
      return {};
    default:
      return all;
  }
};
