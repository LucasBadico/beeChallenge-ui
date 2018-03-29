var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { createReducer } from './..';
import { SAVE_FORM_FIELD } from '../actions';
import log from '../../log';
var initial = {};

export default createReducer(initial, _defineProperty({}, SAVE_FORM_FIELD, function (state, action) {
    return _extends({}, state, _defineProperty({}, action.form, _extends({}, state[action.form], _defineProperty({}, action.field, action.value))));
}));
//# sourceMappingURL=form.js.map