import React from 'react'
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important'
import styles from './styles'

export const Button = ({ children, ...props }) => (
    <button
      className={css(styles.button)}
      {...props}
    >
      {children}
    </button>
  );
  
  Button.propTypes = {
    children: PropTypes.node,
  };
  