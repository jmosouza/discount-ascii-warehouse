/* global fetch, API_HOST, API_PER_PAGE */

import ndjsonStream from 'can-ndjson-stream';

export const fetchProductsSuccess = product => ({
  type: 'PRODUCTS::FETCH_SUCCEEDED',
  product,
});

export const fetchProductsNoMore = () => ({
  type: 'PRODUCTS::NO_MORE',
});

export const fetchProductsStarted = () => ({
  type: 'PRODUCTS::FETCH_STARTED',
});

export const fetchProductsFinished = () => ({
  type: 'PRODUCTS::FETCH_FINISHED',
});

// Request products, read NDJSON stream, append products as they come through
export default () => (dispatch, getState) => {
  dispatch(fetchProductsStarted())

  // The state should know when the API returns no more products.
  // Set this to false when the API returns at least 1 product.
  let noMoreProducts = true;

  const { page, sort } = getState().products;
  const skip = page * API_PER_PAGE;
  fetch(`${API_HOST}/api/products?skip=${skip}&sort=${sort}&limit=${API_PER_PAGE}`)
    .then(data => ndjsonStream(data.body))
    .then((stream) => {
      const streamReader = stream.getReader();
      const readHandler = (result) => {
        if (result.done) {
          dispatch(fetchProductsFinished())
          if (noMoreProducts) dispatch(fetchProductsNoMore());
          return;
        }

        // There is at least 1 product
        noMoreProducts = false;

        dispatch(fetchProductsSuccess(result.value));
        streamReader.read().then(readHandler);
      };
      streamReader.read().then(readHandler);
    });
};
