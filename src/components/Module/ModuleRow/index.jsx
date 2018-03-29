
import React from 'react'
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important'
import styles from './styles'

export const ModuleRow = ({ inline, children, maxWidth, formPadding }) => {
    const style = styles({inline, maxWidth, formPadding})
    return (
    <div className={css(style.moduleRow)}>
       {children}
    </div>)
}
  
ModuleRow.propTypes = {
    children: PropTypes.node.isRequired,
    inline: PropTypes.bool,
    maxWidth: PropTypes.number,
    formPadding: PropTypes.number,
};
  