
import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import styles from './styles';

export var ModuleRow = function ModuleRow(_ref) {
    var inline = _ref.inline,
        children = _ref.children,
        maxWidth = _ref.maxWidth,
        formPadding = _ref.formPadding;

    var style = styles({ inline: inline, maxWidth: maxWidth, formPadding: formPadding });
    return React.createElement(
        'div',
        { className: css(style.moduleRow), 'data-e2e-node': 'div',
            'data-e2e-file': 'index'
        },
        children
    );
};

ModuleRow.propTypes = {
    children: PropTypes.node.isRequired,
    inline: PropTypes.bool,
    maxWidth: PropTypes.number,
    formPadding: PropTypes.number
};
//# sourceMappingURL=index.js.map