export default (page = 0, action) => {
  switch (action.type) {
    case 'PRODUCTS::PAGE':
      return action.page;
    case 'PRODUCTS::SORT':
      return 0;
    default:
      return page;
  }
};
