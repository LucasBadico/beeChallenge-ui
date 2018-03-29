var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import Select from 'react-select';
import log from '../../log';

import { ModuleCel, ActionForm, Button, TextInput, SelectInput } from '../../components';

import { closeForm, sendForm, NOT_FINDED_DDD } from '../../store/actions';

import styles from './styles';

var CalcWrapped = function CalcWrapped(_ref) {
    var buttler = _ref.buttler,
        dispatch = _ref.dispatch;

    var FORM = 'calculator';
    if (!buttler.forms[FORM]) return React.createElement('span', { className: 'Calc_PlaceHolder', 'data-e2e-node': 'span',
        'data-e2e-file': 'Calc'
    });
    return React.createElement(
        ModuleCel,
        {
            inline: true,
            absolute: true,
            tooltip: {
                text: 'fechar',
                onClick: function onClick() {
                    return dispatch(closeForm(FORM));
                }
            },
            width: '90%',
            'data-e2e-node': 'ModuleCel',
            'data-e2e-file': 'Calc'
        },
        React.createElement(
            'h3',
            {
                'data-e2e-node': 'h3',
                'data-e2e-file': 'Calc'
            },
            ' Calcule aqui '
        ),
        React.createElement(
            'div',
            {
                'data-e2e-node': 'div',
                'data-e2e-file': 'Calc'
            },
            React.createElement(
                'h4',
                { className: css(styles.h4), 'data-e2e-node': 'h4',
                    'data-e2e-file': 'Calc'
                },
                ' DDD de origem'
            ),
            React.createElement(SelectInput, {
                form: FORM,
                name: 'origin',
                field: 'origin',
                options: [{ value: '011', label: '011' }, { value: '016', label: '016' }, { value: '018', label: '018' }, { value: NOT_FINDED_DDD, label: 'Não encontrei o DDD' }],
                'data-e2e-node': 'SelectInput',
                'data-e2e-file': 'Calc'
            })
        ),
        React.createElement(
            'div',
            {
                'data-e2e-node': 'div',
                'data-e2e-file': 'Calc'
            },
            React.createElement(
                'h4',
                { className: css(styles.h4), 'data-e2e-node': 'h4',
                    'data-e2e-file': 'Calc'
                },
                ' DDD de destino'
            ),
            React.createElement(SelectInput, {
                name: 'destination',
                form: FORM,
                field: 'destination',
                options: [{ value: '011', label: '011' }, { value: '016', label: '016' }, { value: '018', label: '018' }, { value: NOT_FINDED_DDD, label: 'Não encontrei o DDD' }],
                'data-e2e-node': 'SelectInput',
                'data-e2e-file': 'Calc'
            })
        ),
        React.createElement(
            'div',
            {
                'data-e2e-node': 'div',
                'data-e2e-file': 'Calc'
            },
            React.createElement(
                'h4',
                { className: css(styles.h4), 'data-e2e-node': 'h4',
                    'data-e2e-file': 'Calc'
                },
                ' Dura\xE7\xE3o da chamada'
            ),
            React.createElement(TextInput, { form: FORM, field: 'totalTime', type: 'number', placeholder: 'Em minutos', 'data-e2e-node': 'TextInput',
                'data-e2e-file': 'Calc'
            })
        ),
        React.createElement(
            'p',
            { className: css(styles.hint), 'data-e2e-node': 'p',
                'data-e2e-file': 'Calc'
            },
            '* Preencha todos os campos.'
        ),
        React.createElement(ActionForm, {
            validate: function validate(form) {
                return true;
            },
            component: function component(props) {
                return React.createElement(
                    Button,
                    _extends({}, props, {
                        'data-e2e-node': 'Button',
                        'data-e2e-file': 'Calc'
                    }),
                    'Calcular'
                );
            },
            validProps: { onClick: function onClick() {
                    return dispatch(sendForm(FORM));
                } },
            'data-e2e-node': 'ActionForm',
            'data-e2e-file': 'Calc'
        })
    );
};

var Calc = connect(function (_ref2) {
    var buttler = _ref2.buttler;
    return { buttler: buttler };
}, function (dispatch) {
    return { dispatch: dispatch };
})(CalcWrapped);

export default Calc;
//# sourceMappingURL=Calc.js.map