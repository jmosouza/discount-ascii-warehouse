/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxStore from './redux/store';
import AsciiStore from './store/containers/AsciiStore';
import '../style/index.sass';

ReactDOM.render(
  <Provider store={reduxStore}>
    <AsciiStore />
  </Provider>,
  document.getElementById('react-app-root'),
);
