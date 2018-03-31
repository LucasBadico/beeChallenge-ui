import 'rxjs'
import * as R from 'ramda'
import {
    WILL_OPEN_FORM,
    OPEN_FORM,
    WILL_CLOSE_FORM,
    REQUEST_FULFILLED,
    CLOSE_FORM,
    REQUEST_PENDING,
} from '../const'

import log from 'log'

export const handlePrices = (action$, store) => action$.ofType(REQUEST_PENDING)
    .map(action => {
        if (action.on === 'prices-raw') {
            const prices = R.pipe(
                R.path(['data']),
                R.reduce((acc, {origin, destination, costByMinute}) => ({
                    ...acc,
                    [origin]:{
                        ...(acc[origin] || {}),
                        [destination]: costByMinute,
                    }
                }), {}),
            )(action.data)

            return {
                type: REQUEST_FULFILLED,
                on: 'prices',
                url: action.url,
                data: prices
            }
        }
        return {
            ...action,
            type: REQUEST_FULFILLED,
        }
    })


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
