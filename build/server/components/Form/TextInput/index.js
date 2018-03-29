import _default from 'ramda/src/path';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

import { css } from 'aphrodite/no-important';
import { connect } from 'react-redux';
import log from '../../../log';
import styles from './styles';

import { saveFormField } from '../../../store/actions';

var TextInputWrapped = function TextInputWrapped(_ref) {
  var formState = _ref.formState,
      form = _ref.form,
      dispatch = _ref.dispatch,
      field = _ref.field,
      props = _objectWithoutProperties(_ref, ['formState', 'form', 'dispatch', 'field']);

  return React.createElement('input', _extends({
    className: css(styles.textInput),
    value: _default([form, field], formState),
    onChange: function onChange(_ref2) {
      var value = _ref2.target.value;
      return dispatch(saveFormField(form, field, value));
    }
  }, props, {
    'data-e2e-node': 'input',
    'data-e2e-file': 'index'
  }));
};

export { TextInputWrapped };
export var TextInput = connect(function (_ref3) {
  var form = _ref3.form;
  return { formState: form };
}, function (dispatch) {
  return { dispatch: dispatch };
})(TextInputWrapped);

TextInputWrapped.propTypes = {
  // props validation go in here
  type: PropTypes.string.isRequired,
  field: PropTypes.string,
  form: PropTypes.string,
  formState: PropTypes.object,
  placeholder: PropTypes.string
};
//# sourceMappingURL=index.js.map