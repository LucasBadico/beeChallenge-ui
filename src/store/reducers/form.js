import { createReducer } from 'store'

const initial = {}

export default createReducer(initial, {
    'SAVE_FIELD': (state, action) => ({
        ...state,
        [action.form]: {
            ...state[action.form],
            [action.field]: action.value,
        }
    }),
  })