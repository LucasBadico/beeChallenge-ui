import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../..';
import styles from './styles';

export var TableCel = function TableCel(_ref) {
  var title = _ref.title,
      value = _ref.value,
      subitems = _ref.subitems,
      buttonText = _ref.buttonText;
  return React.createElement(
    'div',
    { className: 'plan', 'data-e2e-node': 'div',
      'data-e2e-file': 'index'
    },
    React.createElement(
      'h3',
      {
        'data-e2e-node': 'h3',
        'data-e2e-file': 'index'
      },
      title,
      React.createElement(
        'span',
        {
          'data-e2e-node': 'span',
          'data-e2e-file': 'index'
        },
        'R$',
        value
      )
    ),
    React.createElement(
      Button,
      {
        'data-e2e-node': 'Button',
        'data-e2e-file': 'index'
      },
      buttonText
    ),
    React.createElement(
      'ul',
      {
        'data-e2e-node': 'ul',
        'data-e2e-file': 'index'
      },
      subitems.map(function (item, i) {
        return React.createElement(
          'li',
          { key: i, 'data-e2e-node': 'li',
            'data-e2e-file': 'index'
          },
          item
        );
      })
    )
  );
};

TableCel.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  subitems: PropTypes.arrayOf(PropTypes.oneOf(PropTypes.string, PropTypes.node)),
  buttonText: PropTypes.string
};

TableCel.defaultProps = {
  title: 'Price Table',
  value: '0,00',
  subitems: [],
  buttonText: 'Assinar'
};
//# sourceMappingURL=index.js.map