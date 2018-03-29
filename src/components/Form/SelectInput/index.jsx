import React from 'react'
import PropTypes from 'prop-types';
import { css } from 'aphrodite'
import { connect } from 'react-redux'
import * as R from 'ramda'
import styles from './styles'
import Select from 'react-select'

export const SelectInputWrapper = ({ formName, schema, form, ...props }) => {
    return (
        <Select
            value={R.path([formName, schema],form)}
            className={css(styles.textInput)}
            {...props}
        />
    )
}

export const SelectInput = connect(
    ({ form }) => ({ form }),
    (dispatch) => ({ dispatch })
)(SelectInputWrapper)
  
SelectInputWrapper.propTypes = {
// props validation go in here
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    schema: PropTypes.string,
    formName: PropTypes.string,
    form: PropTypes.object,
    value: PropTypes.any,
    options: PropTypes.arrayOf(PropTypes.any)
}
  