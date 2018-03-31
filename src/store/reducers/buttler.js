
import * as R from 'ramda'
import { createReducer } from 'store'
import {
    OPEN_FORM,
    CLOSE_FORM,
    REQUEST_FULFILLED,
} from 'store/const'
import log from 'log'

const initial = {
    forms: {},
    price: [
            {
            '#origin':{
                '#destination': 'value',
            },
            '011':{
                '016': 1.9,
            },
        }
    ],
}

export default createReducer(initial, {
    [OPEN_FORM]: (state, action) => ({
        ...state,
        forms: {
            ...state.forms,
            [action.form]: true,
        }
    }),
    [CLOSE_FORM]: (state, action) => ({
        ...state,
        forms: {
            ...state.forms,
            [action.form]: false,
        }
    }),
    [REQUEST_FULFILLED]: (state, action) => ({
        ...state,
        [action.on]: [
        ...(R.isNil(state[action.on]) ? [] : state[action.on]),
        {
            url: action.url,
            data: action.data,
        }]
    }),
  })