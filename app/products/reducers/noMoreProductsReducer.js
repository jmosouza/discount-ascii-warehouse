export default (hasMore = true, action) => {
  switch (action.type) {
    case 'ENTITIES::PRODUCTS::FETCH::NO_MORE':
      return false;
    default:
      return hasMore;
  }
};
