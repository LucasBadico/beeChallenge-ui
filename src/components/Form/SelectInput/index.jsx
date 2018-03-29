import React from 'react'
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important'
import { connect } from 'react-redux'
import * as R from 'ramda'
import Select from 'react-select'
import log from 'log'
import { saveFormField } from 'store/actions'
import styles from './styles'

export const SelectInputWrapper = ({ dispatch, formState, field, form, ...props }) => {
    return (
        <Select
            value={R.path([form, field],formState)}
            className={css(styles.textInput)}
            onChange={({value}) => dispatch(
                saveFormField(form, field, value)
            )}
            {...props}
        />
    )
}

export const SelectInput = connect(
    ({ form }) => ({ formState: form }),
    (dispatch) => ({ dispatch })
)(SelectInputWrapper)
  
SelectInputWrapper.propTypes = {
// props validation go in here
    name: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    form: PropTypes.string.isRequired,
    formState: PropTypes.object,
    options: PropTypes.arrayOf(PropTypes.any)
}
  