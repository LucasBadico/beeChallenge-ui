import Rx from 'rxjs'
import * as R from 'ramda'

import {
    POST,
} from 'store/const'

const host = process.env.NODE_ENV === 'production' ? '159.65.68.177' : 'localhost:3030'

export const fetchData = (url, method, body) => Rx.Observable.ajax({
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
