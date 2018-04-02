import Rx from 'rxjs'
import * as R from 'ramda'
import log from 'log'
import { POST } from 'store/const'

const host = process.env.NODE_ENV === 'production' ? '159.65.68.177' : 'localhost:3030'

/*
// Promises aren't truly cancelable, use Observable.ajax
    // unless you *really* need to consume a Promise
    Observable.ajax(`/api/users/${userId}`)
      .map(payload => ({ type: 'FETCH_USER_FULFILLED', payload }))
      .takeUntil(actions.ofType('FETCH_USER_ABORTED'))
      // If the ajax request errors, we'll catch it and instead emit a
      // "FETCH_USER_ERRORED" action with the error info, your
      // reducer would then be responsible for returning the correct state
      .catch(error => Observable.of({ type: 'FETCH_USER_ERRORED', error }))
      .startWith({ type: 'FETCH_USER_PENDING' });
  )
*/

export const fetchData = (url, method, body) => Rx.Observable.ajax({
    url: `http://${'159.65.68.177'}/api${url}`,
    method: method,
    responseType: 'json',
    crossDomain: true,
    headers: {
        'Content-Type': 'text/plain'
    },
    body: JSON.stringify(body),
})
.map(ajax => ({
    data: R.path(['response'], ajax),
    sendedData: body
}))
// TODO Add a swithMap here to retry