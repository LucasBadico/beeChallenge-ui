import React from 'react'
import PropTypes from 'prop-types';
import { css } from 'aphrodite'
import styles from './styles'

export const TitlePage = ({ children }) => (
    <h1 className={css(styles.titlePage)}> {children} </h1>
)
  
TitlePage.propTypes = {
    children: PropTypes.node,
};
  