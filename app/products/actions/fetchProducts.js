/* global fetch, API_HOST, API_PER_PAGE */

import ndjsonStream from 'can-ndjson-stream';

export const fetchProductsSuccess = product => ({
  type: 'ENTITIES::PRODUCTS::FETCH::SUCCESS',
  product,
});

export const fetchProductsNoMore = () => ({
  type: 'ENTITIES::PRODUCTS::FETCH::NO_MORE',
});

// Request products, read NDJSON stream, append products as they come through
export default ({ page = 0 }) => (dispatch) => {
  let noMore = true;
  const skip = page * API_PER_PAGE;
  fetch(`${API_HOST}/api/products?skip=${skip}`)
    .then(data => ndjsonStream(data.body))
    .then((stream) => {
      const streamReader = stream.getReader();
      const readHandler = (result) => {
        if (result.done) {
          if (noMore) dispatch(fetchProductsNoMore());
          return;
        }
        noMore = false;
        dispatch(fetchProductsSuccess(result.value));
        streamReader.read().then(readHandler);
      };
      streamReader.read().then(readHandler);
    });
};
