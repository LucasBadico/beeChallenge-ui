import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import Select from 'react-select';

import { TitlePage, TitleModule, ModuleCel, ModuleRow, ActionForm, Button } from '../../components';

import { openForm } from '../../store/actions';

import Result from './Result';
import Calc from './Calc';
import Lead from './Lead';
import styles from './styles';

export var CalculatorWrapped = function CalculatorWrapped(_ref) {
    var buttler = _ref.buttler,
        dispatch = _ref.dispatch;

    return React.createElement(
        'div',
        {
            'data-e2e-node': 'div',
            'data-e2e-file': 'index'
        },
        React.createElement(
            ModuleRow,
            {
                'data-e2e-node': 'ModuleRow',
                'data-e2e-file': 'index'
            },
            React.createElement(
                ModuleCel,
                { width: '40%', table: true, 'data-e2e-node': 'ModuleCel',
                    'data-e2e-file': 'index'
                },
                React.createElement(
                    TitlePage,
                    {
                        'data-e2e-node': 'TitlePage',
                        'data-e2e-file': 'index'
                    },
                    'Fale Mais'
                ),
                React.createElement(
                    TitleModule,
                    {
                        'data-e2e-node': 'TitleModule',
                        'data-e2e-file': 'index'
                    },
                    ' com a ',
                    React.createElement(
                        'b',
                        {
                            'data-e2e-node': 'b',
                            'data-e2e-file': 'index'
                        },
                        'BeePhonica!'
                    )
                ),
                React.createElement(Lead, {
                    'data-e2e-node': 'Lead',
                    'data-e2e-file': 'index'
                })
            ),
            React.createElement(
                ModuleCel,
                { width: '60%', table: true, 'data-e2e-node': 'ModuleCel',
                    'data-e2e-file': 'index'
                },
                React.createElement(
                    'p',
                    {
                        'data-e2e-node': 'p',
                        'data-e2e-file': 'index'
                    },
                    'Na BeePhonica voc\xEA pode falar 30, 60 ou 120 minutos sem pagar nada a mais por isso.'
                ),
                React.createElement(
                    'p',
                    {
                        'data-e2e-node': 'p',
                        'data-e2e-file': 'index'
                    },
                    'Use nossa calculadora para descobrir o quanto voc\xEA vai economizar.'
                ),
                React.createElement(Calc, {
                    'data-e2e-node': 'Calc',
                    'data-e2e-file': 'index'
                }),
                React.createElement(
                    Button,
                    { onClick: function onClick() {
                            return dispatch(openForm('calculator'));
                        }, 'data-e2e-node': 'Button',
                        'data-e2e-file': 'index'
                    },
                    'Calcule j\xE1'
                )
            )
        ),
        React.createElement(Result, {
            'data-e2e-node': 'Result',
            'data-e2e-file': 'index'
        })
    );
};

CalculatorWrapped.propTypes = {
    dispatch: PropTypes.func,
    buttler: PropTypes.object
};

export var Calculator = connect(function (_ref2) {
    var buttler = _ref2.buttler;
    return { buttler: buttler };
}, function (dispatch) {
    return { dispatch: dispatch };
})(CalculatorWrapped);
//# sourceMappingURL=index.js.map