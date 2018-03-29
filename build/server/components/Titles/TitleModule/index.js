import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import styles from './styles';

export var TitleModule = function TitleModule(_ref) {
    var children = _ref.children;
    return React.createElement(
        'h2',
        { className: css(styles.titleModule), 'data-e2e-node': 'h2',
            'data-e2e-file': 'index'
        },
        ' ',
        children,
        ' '
    );
};

TitleModule.propTypes = {
    children: PropTypes.node
};
//# sourceMappingURL=index.js.map