import Rx from 'rxjs'
import * as R from 'ramda'
import {
    WILL_SAVE_FORM_FIELD,
    SAVE_FORM_FIELD,
    OPEN_FORM,
    REQUESTED_DATA,
    NOT_FINDED_DDD,
    WILL_SEND_FORM,
} from 'store/actions'

import log from 'log'
import { request } from 'http';

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

const host = process.env.NODE_ENV === 'production' ? '159.65.68.177' : 'localhost:3030'
const POST = 'POST'
const fetchData = (url, method, body) => Rx.Observable.ajax({
    url: `http://${'159.65.68.177'}/api${url}`,
    method: method,
    responseType: 'json',
    crossDomain: true,
    headers: {
        'Content-Type': 'application/json',
        'x-rxjs-is': 'Awesome And Trick >_<"',
    },
    body,
}).map(ajax => ({
    data: R.path(['response'], ajax),
    sendedData: body
}))

export const fetchService = (action$, store) => action$.ofType(WILL_SEND_FORM)
    .debounceTime(500)
    .mergeMap(
        action => {
            const state = store.getState()
            if (action.form === 'calculator') {
                // using the form name we can resolve all api calls,
                const url = '/calculator/fale-mais'

                // data needed to send
                const {
                    origin,
                    destination,
                    totalTime,
                } = state.form[action.form]
                const costByMinute = R.last(state.buttler.price)[origin][destination]

                const mins = ['30', '60', '120']
                return Rx.Observable
                    .from(mins)
                    .map(min => {
                        const dataToSend = {
                            costByMinute,
                            totalTime,
                            origin,
                            destination,
                            plan: `FaleMais${min}`,
                        }
                        return fetchData(url, POST, dataToSend)
                    })
                    .toArray()
                    .switchMap(requestArray => Rx.Observable.forkJoin(requestArray))
                    .map(data => ({
                        type: REQUESTED_DATA,
                        form: 'calculator',
                        url,
                        data,
                    }))
            }
            
            return {
                type: REQUESTED_DATA,
                request: 'untraced api call',
                data: action,
            }
        }
    )
/*
  url: 'https://httpbin.org/post',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-rxjs-is': 'Awesome!'
  },
  body: {
    hello: 'World!',
  }

  .toArray()
  .switchMap(requestArray => Rx.Observable.forkJoin(requestArray))
  .zip(projectIds)

.mergeMap(action =>
        race(
        timer(2000).mapTo({ type: OPEN_N_M }),
        action$.ofType(EPT_CANCEL_OPEN_N_M)
            .take(1),
       ),
*/