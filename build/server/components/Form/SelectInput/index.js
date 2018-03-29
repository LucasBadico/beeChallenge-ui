import _default from 'ramda/src/path';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import { connect } from 'react-redux';

import Select from 'react-select';
import log from '../../../log';
import { saveFormField } from '../../../store/actions';
import styles from './styles';

var SelectInputWrapper = function SelectInputWrapper(_ref) {
    var dispatch = _ref.dispatch,
        formState = _ref.formState,
        field = _ref.field,
        form = _ref.form,
        props = _objectWithoutProperties(_ref, ['dispatch', 'formState', 'field', 'form']);

    return React.createElement(Select, _extends({
        value: _default([form, field], formState),
        className: css(styles.textInput),
        onChange: function onChange(_ref2) {
            var value = _ref2.value;
            return dispatch(saveFormField(form, field, value));
        }
    }, props, {
        'data-e2e-node': 'Select',
        'data-e2e-file': 'index'
    }));
};

export { SelectInputWrapper };
export var SelectInput = connect(function (_ref3) {
    var form = _ref3.form;
    return { formState: form };
}, function (dispatch) {
    return { dispatch: dispatch };
})(SelectInputWrapper);

SelectInputWrapper.propTypes = {
    // props validation go in here
    name: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    form: PropTypes.string.isRequired,
    formState: PropTypes.object,
    options: PropTypes.arrayOf(PropTypes.any)
};
//# sourceMappingURL=index.js.map