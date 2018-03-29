import { createReducer } from 'store'
import { SAVE_FORM_FIELD  } from 'store/actions'
import log from 'log'
const initial = {}

export default createReducer(initial, {
    [SAVE_FORM_FIELD]: (state, action) => ({
        ...state,
        [action.form]: {
            ...state[action.form],
            [action.field]: action.value,
        }, 
    }),
  })