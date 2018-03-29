
import { createReducer } from 'store'
import {
    OPEN_FORM,
    CLOSE_FORM,
    REQUESTED_DATA,
} from 'store/actions'
import log from 'log'

const initial = {
    forms: {},
    defaultCost: {
        '#origin':{
            '#destination': 'value',
        },
        '011':{
            '016': 1.9,
        },
    },
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
    [REQUESTED_DATA]: (state, action) => (log(action), state),
  })