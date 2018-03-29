import 'rxjs'
import * as R from 'ramda'
import {
    WILL_OPEN_FORM,
    OPEN_FORM,
    WILL_CLOSE_FORM,
    CLOSE_FORM,
} from 'store/actions'

import log from 'log'
import { race } from 'rxjs/observable/race'
import { timer } from 'rxjs/observable/timer'
import { reduce } from 'rxjs/operator/reduce'
import { merge } from 'rxjs/operator/merge'
import { delay } from 'rxjs/operator/delay'
import { mapTo } from 'rxjs/operators'


export const buttlerWillOpenForm = (action$, store) => action$.ofType(WILL_OPEN_FORM)
   .map(action => {
       // put here some logic before open form
       const formToOpen = action.form
       return ({ type: OPEN_FORM, form: formToOpen })
    })

export const buttlerWillCloseForm = (action$, store) => action$.ofType(WILL_CLOSE_FORM)
   .map(action => {
       // put here some logic before closing form
       console.log({action})
       const formToClose = action.form
       return ({ type: CLOSE_FORM, form: formToClose })
    })

export const buttlerShowTable = (action$, store) => action$.ofType(WILL_CLOSE_FORM)
.map(action => {
    // put here some logic before closing form
    const formToClose = action.form
    return ({ type: OPEN_FORM, form: formToClose })
 })

/*
.mergeMap(action =>
        race(
        timer(2000).mapTo({ type: OPEN_N_M }),
        action$.ofType(EPT_CANCEL_OPEN_N_M)
            .take(1),
       ),
*/