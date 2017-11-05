/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxStore from './redux/store';
import AsciiStore from './store/components/AsciiStore';

ReactDOM.render(
  <Provider store={reduxStore}>
    <AsciiStore />
  </Provider>,
  document.getElementById('react-app-root'),
);
