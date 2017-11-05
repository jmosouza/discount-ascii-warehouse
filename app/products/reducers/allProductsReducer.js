export default (all = {}, action) => {
  switch (action.type) {
    case 'ENTITIES::PRODUCTS::FETCH::SUCCESS':
      return {
        ...all,
        [action.product.id]: action.product,
      };
    default:
      return all;
  }
};
