import 'rxjs'

import { race } from 'rxjs/observable/race'
import { timer } from 'rxjs/observable/timer'
import {
    WILL_SAVE_FORM_FIELD,
    SAVE_FORM_FIELD,
    OPEN_FORM,
    NOT_FINDED_DDD,
} from 'store/actions'

import log from 'log'

// Caso tenha um valor tal ativa o outro formulario
export const openLeadOnNotFinded = (action$, store) => action$.ofType(WILL_SAVE_FORM_FIELD)
    .map(action => {
        if (action.value === NOT_FINDED_DDD && action.form === 'calculator' ) {
            return ({ type: OPEN_FORM, form: 'lead' })
        }
        return {
            ...action,
            type: SAVE_FORM_FIELD
        }
    })

export const clearNotFinded = (action$, store) => action$
    .mergeMap(() => {
        action$.ofType(OPEN_FORM).map(action => {
            if (action.form === 'lead') {
                return {
                    type: SAVE_FORM_FIELD,
                    form: 'calculator',
                    value: null,
                }
            }
            return action
        }) 
    })
// .switchMap(action => action$.ofType(SAVE_FORM_FIELD)
//     .timer(1000).map(action => {
//         if (action.value === NOT_FINDED_DDD) {
//             return {
//                 type: SAVE_FORM_FIELD,
//                 ...action,
//                 value: undefined,
//             }
//         }
//         return action
//    })
// )
//    .ignoreElements()
/*
.mergeMap(action =>
        race(
        timer(2000).mapTo({ type: OPEN_N_M }),
        action$.ofType(EPT_CANCEL_OPEN_N_M)
            .take(1),
       ),
*/