var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import styles from './styles';

var Button = function Button(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return React.createElement(
    'button',
    _extends({
      className: css(styles.button)
    }, props, {
      'data-e2e-node': 'button',
      'data-e2e-file': 'index'
    }),
    children
  );
};

export { Button };
Button.propTypes = {
  children: PropTypes.node
};
//# sourceMappingURL=index.js.map