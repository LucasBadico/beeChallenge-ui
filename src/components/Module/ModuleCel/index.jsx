
import React from 'react'
import PropTypes from 'prop-types';
import { css } from 'aphrodite'
import styles from './styles'

export const ModuleCel = ({ inline, children, maxWidth, formPadding }) => {
    const style = styles({inline, maxWidth, formPadding})
    return (
    <div className={css(style.module)}>
        <div className={css(style.form)}>
            {children}
        </div>
    </div>)
}
  
ModuleCel.propTypes = {
    children: PropTypes.node.isRequired,
    inline: PropTypes.bool,
    maxWidth: PropTypes.number,
    formPadding: PropTypes.number,
};
  