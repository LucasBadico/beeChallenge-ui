import 'rxjs'

import { race } from 'rxjs/observable/race'
import { timer } from 'rxjs/observable/timer'
import { SAVE_FORM_FIELD, OPEN_FORM, NOT_FINDED_DDD } from 'store/actions'
import log from 'log'

// Caso tenha um valor tal ativa o outro formulario
export const forms = (action$, store) => action$.ofType(SAVE_FORM_FIELD)
   .map((props) => {
       if (props.value === NOT_FINDED_DDD) {
        return ({ type: OPEN_FORM, form: 'lead' })
       }
       return ({ ...props, type: 'SAVE'})
    })
   .do((...args) => log(args))
//    .ignoreElements()
