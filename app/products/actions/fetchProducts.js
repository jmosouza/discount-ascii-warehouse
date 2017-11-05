/* global fetch, API_HOST */

import ndjsonStream from 'can-ndjson-stream';

export const fetchProductsSuccess = product => ({
  type: 'ENTITIES::PRODUCTS::FETCH::SUCCESS',
  product,
});

// Request products, read NDJSON stream, append products as they come through
export default ({ skip = 0 }) => (dispatch) => {
  fetch(`${API_HOST}/api/products?skip=${skip}`)
    .then(data => ndjsonStream(data.body))
    .then((stream) => {
      const streamReader = stream.getReader();
      const readHandler = (result) => {
        if (result.done) return;
        dispatch(fetchProductsSuccess(result.value));
        streamReader.read().then(readHandler);
      };
      streamReader.read().then(readHandler);
    });
};
