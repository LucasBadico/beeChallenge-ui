var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import styles from './styles';

var ModuleCel = function ModuleCel(_ref) {
    var children = _ref.children,
        tooltip = _ref.tooltip,
        props = _objectWithoutProperties(_ref, ['children', 'tooltip']);

    var style = styles(_extends({}, props, { tooltip: tooltip }));
    var tooltipConfig = tooltip || {};
    return React.createElement(
        'div',
        { className: css(style.module), 'data-e2e-node': 'div',
            'data-e2e-file': 'index'
        },
        React.createElement(
            'a',
            { className: css(style.upperButton) + ' toggle', onClick: tooltipConfig.onClick, 'data-e2e-node': 'a',
                'data-e2e-file': 'index'
            },
            React.createElement('i', { className: 'fa fa-times', 'data-e2e-node': 'i',
                'data-e2e-file': 'index'
            }),
            React.createElement(
                'div',
                { className: 'tooltip', 'data-e2e-node': 'div',
                    'data-e2e-file': 'index'
                },
                tooltipConfig.text
            )
        ),
        React.createElement(
            'div',
            { className: css(style.form), 'data-e2e-node': 'div',
                'data-e2e-file': 'index'
            },
            children
        )
    );
};

export { ModuleCel };
ModuleCel.propTypes = {
    children: PropTypes.node.isRequired,
    inline: PropTypes.bool,
    table: PropTypes.bool,
    width: PropTypes.string,
    maxWidth: PropTypes.number,
    formPadding: PropTypes.number
};
//# sourceMappingURL=index.js.map