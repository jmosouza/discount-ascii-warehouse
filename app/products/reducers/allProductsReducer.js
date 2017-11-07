export default (all = {}, action) => {
  switch (action.type) {
    case 'PRODUCTS::FETCH_SUCCEEDED':
      return {
        ...all,
        ...action.products,
      };
    case 'PRODUCTS::SORT':
      return {};
    default:
      return all;
  }
};
