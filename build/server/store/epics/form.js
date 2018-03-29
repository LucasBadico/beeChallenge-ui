var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import Rx from 'rxjs';

import { WILL_SAVE_FORM_FIELD, SAVE_FORM_FIELD, OPEN_FORM, REQUESTED_DATA, NOT_FINDED_DDD, WILL_SEND_FORM } from '../actions';

import log from '../../log';

// Caso tenha um valor tal ativa o outro formulario
export var openLeadOnNotFinded = function openLeadOnNotFinded(action$, store) {
    return action$.ofType(WILL_SAVE_FORM_FIELD).map(function (action) {
        if (action.value === NOT_FINDED_DDD && action.form === 'calculator') {
            return { type: OPEN_FORM, form: 'lead' };
        }
        return _extends({}, action, {
            type: SAVE_FORM_FIELD
        });
    });
};

var fetchData = function fetchData(body, url) {
    return log({ body: body, url: url }), Rx.Observable.ajax({
        url: 'http://localhost:3030' + url,
        method: 'POST',
        responseType: 'json',
        crossDomain: true,
        withCredentials: true,
        // createXHR: function () {
        //     return new XMLHttpRequest();
        //   },
        headers: {
            'Content-Type': 'application/json',
            'x-rxjs-is': 'Awesome And Trick >_<"'
        },
        body: body
    }).pluck('data');
};

export var fetchService = function fetchService(action$, store) {
    return action$.ofType(WILL_SEND_FORM).debounceTime(500).mergeMap(function (action) {
        // if (action.form === 'calculator') {
        var state = store.getState();
        var _state$form$action$fo = state.form[action.form],
            origin = _state$form$action$fo.origin,
            destination = _state$form$action$fo.destination,
            totalTime = _state$form$action$fo.totalTime;

        var costByMinute = state.buttler.defaultCost[origin][destination];
        var url = '/calculator/fale-mais';
        var mins = ['30'];

        return Rx.Observable.from(mins).map(function (min) {
            return fetchData({
                costByMinute: costByMinute,
                totalTime: totalTime,
                plan: 'FaleMais' + min
            }, url);
        }).toArray().switchMap(function (requestArray) {
            return Rx.Observable.forkJoin(requestArray);
        }).zip(mins).map(function (data) {
            return {
                type: REQUESTED_DATA,
                request: 'calculator',
                data: data
            };
        });
        // }
    });
};
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
//# sourceMappingURL=form.js.map