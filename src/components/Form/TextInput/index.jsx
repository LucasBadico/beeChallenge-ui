import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda' 
import { css } from 'aphrodite'
import { connect } from 'react-redux'
import log from 'log'
import styles from './styles'

import {
  saveFormField
} from 'store/actions'

export const TextInputWrapped = ({ formState, form, dispatch, field, ...props }) => {
  return (
    <input
      className={css(styles.textInput)}
      value={R.path([form, field], formState)}
      onChange={({ target: { value } }) => dispatch(
        saveFormField(form, field, value)
      )}
      {...props}
    />
  )
}

export const TextInput = connect(
  ({ form }) => ({ formState: form }),
  (dispatch) => ({ dispatch })
)(TextInputWrapped)
  
TextInputWrapped.propTypes = {
    // props validation go in here
    type: PropTypes.string.isRequired,
    field: PropTypes.string,
    form: PropTypes.string,
    formState: PropTypes.object,
    placeholder: PropTypes.string,
}
  