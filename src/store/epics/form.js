import Rx from 'rxjs'

import {
    WILL_SAVE_FORM_FIELD,
    SAVE_FORM_FIELD,
    OPEN_FORM,
    REQUESTED_DATA,
    NOT_FINDED_DDD,
    WILL_SEND_FORM,
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

const fetchData = (body, url) => (log({body, url}), Rx.Observable.ajax({
    url: `http://159.65.68.177/api${url}`,
    method: 'POST',
    responseType: 'json',
    crossDomain: true,
    withCredentials: true,
    // createXHR: function () {
    //     return new XMLHttpRequest();
    //   },
    headers: {
        'Content-Type': 'application/json',
        'x-rxjs-is': 'Awesome And Trick >_<"',
    },
    body,
}).pluck('data'))

export const fetchService = (action$, store) => action$.ofType(WILL_SEND_FORM)
    .debounceTime(500)
    .mergeMap(
        action => {
            // if (action.form === 'calculator') {
                const state = store.getState()
                const {
                    origin,
                    destination,
                    totalTime,
                } = state.form[action.form]
                const costByMinute = state.buttler.defaultCost[origin][destination]
                const url = '/calculator/fale-mais'
                const mins = ['30']
                
                return Rx.Observable
                    .from(mins)
                    .map(min => fetchData({
                        costByMinute,
                        totalTime,
                        plan: `FaleMais${min}`,
                    }, url))
                    .toArray()
                    .switchMap(requestArray => Rx.Observable.forkJoin(requestArray))
                    .zip(mins)
                    .map(data => ({
                        type: REQUESTED_DATA,
                        request: 'calculator',
                        data,
                    }))
            // }
            
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