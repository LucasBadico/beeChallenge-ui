
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchData } from 'utils'
import log from 'log'

import {
    REQUEST_PENDING,
} from 'store/const'

const FetchWrapped = ({ dispatch, on, children, url, method, body }) => {
    const fetch = fetchData(url, method, body)
    fetch.subscribe(
        data => dispatch({
            type: REQUEST_PENDING,
            on,
            url,
            data,
        }),
        err => log('err', err),
        () => log('complete'),
    )
    return children
}

export const Fetch = connect(
    () => ({}),
    (dispatch) => ({ dispatch })
  )(FetchWrapped)
  
FetchWrapped.propTypes = {
    children: PropTypes.node,
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    body: PropTypes.object,
    dispatch: PropTypes.func,
    buttler: PropTypes.object,
};
  