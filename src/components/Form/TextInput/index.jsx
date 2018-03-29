import React from 'react'
import PropTypes from 'prop-types';
import { css } from 'aphrodite'
import styles from './styles'

export const TextInput = ({ schema, formName, ...props }) => (
    <input
      className={css(styles.textInput)}
      {...props}
    />
  );
  
TextInput.propTypes = {
    // props validation go in here
    type: PropTypes.string.isRequired,
    schema: PropTypes.string,
    formName: PropTypes.string,
    placeholder: PropTypes.string,
}
  