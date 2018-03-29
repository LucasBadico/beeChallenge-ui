
import React from 'react'
import PropTypes from 'prop-types';
import { css } from 'aphrodite'
import styles from './styles'

export const ModuleCel = ({ children, ...props }) => {
    const style = styles({...props})
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
    table: PropTypes.bool,
    width: PropTypes.string,
    maxWidth: PropTypes.number,
    formPadding: PropTypes.number,
};
  