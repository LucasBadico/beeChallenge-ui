import 'rxjs'

import { race } from 'rxjs/observable/race'
import { timer } from 'rxjs/observable/timer'
import { SAVE_FORM_FIELD } from 'store/actions'
import log from 'log'

// Caso tenha um valor tal ativa o outro formulario
const forms = (action$, store) => action$.ofType(SAVE_FORM_FIELD)
   .map((props) => ({...props, type: 'SAVE'}))
   .do((...args) => log(args))
//    .ignoreElements()

export default forms