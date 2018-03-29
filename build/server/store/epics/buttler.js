import 'rxjs';

import { WILL_OPEN_FORM, OPEN_FORM, WILL_CLOSE_FORM, CLOSE_FORM } from '../actions';

import log from '../../log';
import { race } from 'rxjs/observable/race';
import { timer } from 'rxjs/observable/timer';
import { reduce } from 'rxjs/operator/reduce';
import { merge } from 'rxjs/operator/merge';
import { delay } from 'rxjs/operator/delay';
import { mapTo } from 'rxjs/operators';

export var buttlerWillOpenForm = function buttlerWillOpenForm(action$, store) {
    return action$.ofType(WILL_OPEN_FORM).map(function (action) {
        // put here some logic before open form
        var formToOpen = action.form;
        return { type: OPEN_FORM, form: formToOpen };
    });
};

export var buttlerWillCloseForm = function buttlerWillCloseForm(action$, store) {
    return action$.ofType(WILL_CLOSE_FORM).map(function (action) {
        // put here some logic before closing form
        var formToClose = action.form;
        return { type: CLOSE_FORM, form: formToClose };
    });
};

export var buttlerShowTable = function buttlerShowTable(action$, store) {
    return action$.ofType(WILL_CLOSE_FORM).map(function (action) {
        // put here some logic before closing form
        var formToClose = action.form;
        return { type: OPEN_FORM, form: formToClose };
    });
};

/*
.mergeMap(action =>
        race(
        timer(2000).mapTo({ type: OPEN_N_M }),
        action$.ofType(EPT_CANCEL_OPEN_N_M)
            .take(1),
       ),
*/
//# sourceMappingURL=buttler.js.map