import Rx from 'rxjs'
import * as R from 'ramda'

// import {
// } from 'store/actions' // call a action for the dispatch from epics

import {
    WILL_SAVE_FORM_FIELD,
    SAVE_FORM_FIELD,
    OPEN_FORM,
    REQUESTED_DATA,
    NOT_FINDED_DDD,
    WILL_SEND_FORM,
    POST,
} from 'store/const'

import { fetchData } from 'utils'

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


export const sendFormToService = (action$, store) => action$.ofType(WILL_SEND_FORM)
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
                log(
                    R.path(['buttler', 'prices'], state),
                    R.path(['data'], R.last(R.path(['buttler', 'prices'], state))),
                    state,
                )
                const priceList = R.pipe(
                    R.path(['buttler', 'prices']),
                    R.last,
                    R.path(['data'])
                )(state)

                const costByMinute = R.path([origin, destination], priceList)
                log({
                    priceList,
                    origin,
                    destination,
                    costByMinute,
                })
                return Rx.Observable
                    .from(['30', '60', '120'])
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
                        on: 'calculator',
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