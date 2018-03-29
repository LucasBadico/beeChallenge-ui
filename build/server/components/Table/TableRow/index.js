function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import styles from './styles';

var TableRow = function TableRow(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return React.createElement(
    'div',
    { id: 'pricing-table', className: 'clear', 'data-e2e-node': 'div',
      'data-e2e-file': 'index'
    },
    children
  );
};

export { TableRow };
TableRow.propTypes = {
  children: PropTypes.node
};
//# sourceMappingURL=index.js.map