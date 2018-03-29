
import React from 'react'
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important'
import styles from './styles'

export const ModuleCel = ({ children, tooltip,...props }) => {
    const style = styles({...props, tooltip})
    const tooltipConfig = tooltip || {}
    return (
    <div className={css(style.module)}>
        <a className={`${css(style.upperButton)} toggle`} onClick={tooltipConfig.onClick}><i className="fa fa-times"></i>
            <div className="tooltip">{tooltipConfig.text}</div>
        </a>
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
  