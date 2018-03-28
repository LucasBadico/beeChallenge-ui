
import React from 'react'
import PropTypes from 'prop-types';
import { css } from 'aphrodite'
import styles from './styles'

export const Module = ({ children }) => (
    <div className={css(styles.module)}>
        <div className={css(styles.form)}>
            {children}
        </div>
    </div>)
  
Module.propTypes = {
    children: PropTypes.node,
};
  