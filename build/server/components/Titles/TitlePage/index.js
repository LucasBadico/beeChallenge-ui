import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import styles from './styles';

export var TitlePage = function TitlePage(_ref) {
    var children = _ref.children;
    return React.createElement(
        'h1',
        { className: css(styles.titlePage), 'data-e2e-node': 'h1',
            'data-e2e-file': 'index'
        },
        ' ',
        children,
        ' '
    );
};

TitlePage.propTypes = {
    children: PropTypes.node
};
//# sourceMappingURL=index.js.map