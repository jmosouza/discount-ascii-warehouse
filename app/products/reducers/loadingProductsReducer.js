// Keep track of how many fetch actions have been dispatched.
// When it reaches 0, it means all requests finished.
export default (loading = 0, action) => {
  switch (action.type) {
    case 'PRODUCTS::FETCH_STARTED':
      return loading + 1;
    case 'PRODUCTS::FETCH_FINISHED':
      return Math.min(0, loading - 1);
    case 'PRODUCTS::SORT':
      return 0;
    case 'PRODUCTS::NO_MORE':
      return 0;
    default:
      return loading;
  }
};
