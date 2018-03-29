var _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import { renderToString } from 'react-dom/server';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { StyleSheetServer } from 'aphrodite/no-important';
import routes from '../../routes';
import React from 'react';
import renderIndex from './render-index';
import Store from '../../store';
import wrap from '../wrap';
import fs from 'fs';
import path from 'path';

var assetMap = {
  'bundle.js': 'bundle.js'
};
if ('production' === 'production') {
  assetMap = JSON.parse(fs.readFileSync(path.join('build/client/assets', 'assets.json')));
}

export default wrap(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var memoryHistory, store, history;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            memoryHistory = createMemoryHistory(req.url);
            store = new Store(memoryHistory);
            history = syncHistoryWithStore(memoryHistory, store.data);


            match({
              history: history,
              routes: routes,
              location: req.url
            }, function (error, redirectLocation, renderProps) {
              if (error) {
                res.status(500).send(error.message);
              } else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search);
              } else if (renderProps) {
                var _StyleSheetServer$ren = StyleSheetServer.renderStatic(function () {
                  return renderToString(React.createElement(
                    Provider,
                    { store: store.data, 'data-e2e-node': 'Provider',
                      'data-e2e-file': 'app-renderer'
                    },
                    React.createElement(RouterContext, _extends({}, renderProps, {
                      'data-e2e-node': 'RouterContext',
                      'data-e2e-file': 'app-renderer'
                    }))
                  ));
                }),
                    html = _StyleSheetServer$ren.html,
                    css = _StyleSheetServer$ren.css;

                res.send(renderIndex(html, css, assetMap, store.data));
              } else {
                res.status(404).send('Not found');
              }
            });

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
//# sourceMappingURL=app-renderer.js.map