
import React from 'react'
import PropTypes from 'prop-types';
import { css } from 'aphrodite'
import { connect } from 'react-redux'
import styles from './styles'

const ActionWrapped = ({ component, onClick, validate, form }) => {
    const validated = validate(form)
    const style = styles(validated)
    return (
        <div className={css(style.module)}>
                {validated ? component(onClick) : component()}
        </div>
    )
}

export const ActionForm = connect(
    ({ form }) => ({ form }),
    (dispatch) => ({ dispatch })
  )(ActionWrapped)
  
  ActionWrapped.propTypes = {
    component: PropTypes.func.isRequired,
    onClick: PropTypes.func,
    validation: PropTypes.func,
    form: PropTypes.object,
};
  