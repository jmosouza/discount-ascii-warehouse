export default (hasMore = true, action) => {
  switch (action.type) {
    case 'PRODUCTS::NO_MORE':
      return false;
    case 'PRODUCTS::SORT':
      return true;
    default:
      return hasMore;
  }
};
