
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchData } from 'utils'
import log from 'log'

import {
    WILL_REQUESTED_DATA,
} from 'store/const'

const FetchWrapped = ({ dispatch, on, children, url, method, body }) => {
    const fetch = fetchData(url, method, body)
    fetch.subscribe(
        data => dispatch({
            type: WILL_REQUESTED_DATA,
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
  