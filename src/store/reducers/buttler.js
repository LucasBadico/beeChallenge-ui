
import * as R from 'ramda'
import { createReducer } from 'store'
import {
    OPEN_FORM,
    CLOSE_FORM,
    REQUEST_FULFILLED,
    SHOW_MESSAGE,
} from 'store/const'
import log from 'log'

const initial = {
    forms: {},
    message: {},
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
        },
        message: {
            ...state.forms,
            [action.form]: undefined,
        }
    }),
    [SHOW_MESSAGE]: (state, action) => ({
        ...state,
        message: {
            ...state.message,
            [action.form]: action.message,
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