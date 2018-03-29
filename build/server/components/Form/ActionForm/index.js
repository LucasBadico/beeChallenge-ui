
import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import { connect } from 'react-redux';
import log from '../../../log';

var ActionWrapped = function ActionWrapped(_ref) {
    var component = _ref.component,
        validProps = _ref.validProps,
        validate = _ref.validate,
        form = _ref.form;
    return validate(form) ? component(validProps) : component({ disabled: true, style: { cursor: 'not-allowed' } });
};

export var ActionForm = connect(function (_ref2) {
    var form = _ref2.form;
    return { form: form };
}, function (dispatch) {
    return { dispatch: dispatch };
})(ActionWrapped);

ActionWrapped.propTypes = {
    component: PropTypes.func.isRequired,
    validProps: PropTypes.object,
    validate: PropTypes.func.isRequired,
    form: PropTypes.object
};
//# sourceMappingURL=index.js.map