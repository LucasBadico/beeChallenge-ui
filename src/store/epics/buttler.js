import 'rxjs'
import * as R from 'ramda'
import {
    WILL_OPEN_FORM,
    OPEN_FORM,
    WILL_CLOSE_FORM,
    CLOSE_FORM,
} from '../const'

import log from 'log'



export const buttlerWillOpenForm = (action$, store) => action$.ofType(WILL_OPEN_FORM)
   .map(action => {
       const formToOpen = action.form
       return ({ type: OPEN_FORM, form: formToOpen })
    })

export const buttlerWillCloseForm = (action$, store) => action$.ofType(WILL_CLOSE_FORM)
   .map(action => {
       // put here some logic before closing form
       const formToClose = action.form
       return ({ type: CLOSE_FORM, form: formToClose })
    })

export const buttlerShowTable = (action$, store) => action$.ofType(WILL_CLOSE_FORM)
.map(action => {
    // put here some logic before closing form
    const formToClose = action.form
    return ({ type: OPEN_FORM, form: formToClose })
 })
