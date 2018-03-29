var _createReducer;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { createReducer } from './..';
import { OPEN_FORM, CLOSE_FORM, REQUESTED_DATA } from '../actions';
import log from '../../log';

var initial = {
    forms: {},
    defaultCost: {
        '#origin': {
            '#destination': 'value'
        },
        '011': {
            '016': 1.9
        }
    }
};

export default createReducer(initial, (_createReducer = {}, _defineProperty(_createReducer, OPEN_FORM, function (state, action) {
    return _extends({}, state, {
        forms: _extends({}, state.forms, _defineProperty({}, action.form, true))
    });
}), _defineProperty(_createReducer, CLOSE_FORM, function (state, action) {
    return _extends({}, state, {
        forms: _extends({}, state.forms, _defineProperty({}, action.form, false))
    });
}), _defineProperty(_createReducer, REQUESTED_DATA, function (state, action) {
    return log(action), state;
}), _createReducer));
//# sourceMappingURL=buttler.js.map