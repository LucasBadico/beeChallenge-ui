
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import log from 'log'

const ActionWrapped = ({ component, validProps, validate, form }) => (
    log(validate(form)),validate(form) ? component(validProps) : component({ disabled: true, style: { cursor: 'not-allowed' } })
)

export const ActionForm = connect(
    ({ form }) => ({ form }),
    (dispatch) => ({ dispatch })
  )(ActionWrapped)
  
  ActionWrapped.propTypes = {
    component: PropTypes.func.isRequired,
    validProps: PropTypes.object,
    validate: PropTypes.func.isRequired,
    form: PropTypes.object,
};
  