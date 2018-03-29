
import { createReducer } from 'store'
import { OPEN_FORM, CLOSE_FORM  } from 'store/actions'
import log from 'log'
const initial = {
    forms: {},
    bucket: {},
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
  })