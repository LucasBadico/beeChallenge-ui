
import * as R from 'ramda'
import { createReducer } from 'store'
import {
    OPEN_FORM,
    CLOSE_FORM,
    REQUESTED_DATA,
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
    [REQUESTED_DATA]: (state, action) => ({
        ...state,
        [action.form]: [
        ...(R.isNil(state[action.form]) ? [] : state[action.form]),
        {
            url: action.url,
            data: action.data,
        }]
    }),
  })