export default (sort = 'id', action) => {
  switch (action.type) {
    case 'PRODUCTS::SORT':
      return action.sort;
    default:
      return sort;
  }
};
