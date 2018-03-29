import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { StyleSheet } from 'aphrodite/no-important';
import errorCatcher from './error-catcher';
import routes from '../routes';
import Store from '../store';

window.onerror = function (msg, file, line, col, error) {
  errorCatcher(error);
};
window.addEventListener('unhandledrejection', function (event) {
  errorCatcher(event.reason);
});

var store = new Store(browserHistory, window.INITIAL_STATE);
var history = syncHistoryWithStore(browserHistory, store.data);

StyleSheet.rehydrate(window.RENDERED_CLASS_NAMES);

ReactDOM.render(React.createElement(
  Provider,
  { store: store.data, 'data-e2e-node': 'Provider',
    'data-e2e-file': 'index'
  },
  React.createElement(Router, { history: history, routes: routes, 'data-e2e-node': 'Router',
    'data-e2e-file': 'index'
  })
), document.getElementById('mount'));
//# sourceMappingURL=index.js.map