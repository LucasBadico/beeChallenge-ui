import React from 'react'
import PropTypes from 'prop-types';
import { css } from 'aphrodite'
import styles from './styles'

export const TextInput = ({ ...props }) => (
    <input
      className={css(styles.textInput)}
      {...props}
    />
  );
  
TextInput.propTypes = {
    // props validation go in here
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
}
  