import 'rxjs'

import { race } from 'rxjs/observable/race'
import { timer } from 'rxjs/observable/timer'

// Caso tenha um valor tal ativa o outro formulario
const forms = (action$, store) => action$
    // .of({ value: 'NOT_FINDED_DDD' })
    // .ofType('NOT_FINDED_DDD')
    .mergeMap(action =>
        race(
        timer(2000).mapTo({ type: OPEN_N_M }),
        action$.ofType(EPT_CANCEL_OPEN_N_M)
            .take(1),
        ),
)

export default forms