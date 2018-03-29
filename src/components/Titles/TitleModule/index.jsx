import React from 'react'
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important'
import styles from './styles'

export const TitleModule = ({ children }) => (
    <h2 className={css(styles.titleModule)}> {children} </h2>
)
  
TitleModule.propTypes = {
    children: PropTypes.node,
};
  