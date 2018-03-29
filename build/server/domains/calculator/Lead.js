import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import Select from 'react-select';

import { ModuleCel, ActionForm, Button, TextInput } from '../../components';
import styles from './styles';
import { closeForm } from '../../store/actions';

var LeadWrapped = function LeadWrapped(_ref) {
    var dispatch = _ref.dispatch,
        buttler = _ref.buttler;

    var FORM = 'lead';
    if (!buttler.forms[FORM]) return React.createElement('span', { className: 'Lead_PlaceHolder', 'data-e2e-node': 'span',
        'data-e2e-file': 'Lead'
    });
    return React.createElement(
        ModuleCel,
        {
            inline: true,
            absolute: true,
            width: '80%',
            tooltip: {
                text: 'fechar',
                onClick: function onClick() {
                    return dispatch(closeForm(FORM));
                }
            },
            'data-e2e-node': 'ModuleCel',
            'data-e2e-file': 'Lead'
        },
        React.createElement(
            'h3',
            {
                'data-e2e-node': 'h3',
                'data-e2e-file': 'Lead'
            },
            'N\xE3o encontrou o DDD que procurava?'
        ),
        React.createElement(
            'p',
            {
                'data-e2e-node': 'p',
                'data-e2e-file': 'Lead'
            },
            'Caso a o ddd que voc\xEA procura n\xE3o esteja na op\xE7\xF5es dispon\xEDveis, deixe seus dados para avisarmos quando disponibilizarmos.'
        ),
        React.createElement(
            'div',
            {
                'data-e2e-node': 'div',
                'data-e2e-file': 'Lead'
            },
            React.createElement(
                'h4',
                { className: css(styles.h4), 'data-e2e-node': 'h4',
                    'data-e2e-file': 'Lead'
                },
                ' DDD de origem '
            ),
            React.createElement(TextInput, { form: FORM, field: 'origin', type: 'text', placeholder: 'No formato 011, 018', 'data-e2e-node': 'TextInput',
                'data-e2e-file': 'Lead'
            })
        ),
        React.createElement(
            'div',
            {
                'data-e2e-node': 'div',
                'data-e2e-file': 'Lead'
            },
            React.createElement(
                'h4',
                { className: css(styles.h4), 'data-e2e-node': 'h4',
                    'data-e2e-file': 'Lead'
                },
                ' DDD de destino '
            ),
            React.createElement(TextInput, { form: FORM, field: 'destination', type: 'text', placeholder: 'No formato 011, 018', 'data-e2e-node': 'TextInput',
                'data-e2e-file': 'Lead'
            })
        ),
        React.createElement(
            'div',
            {
                'data-e2e-node': 'div',
                'data-e2e-file': 'Lead'
            },
            React.createElement(
                'h4',
                { className: css(styles.h4), 'data-e2e-node': 'h4',
                    'data-e2e-file': 'Lead'
                },
                ' Deixe seu email '
            ),
            React.createElement(TextInput, { form: FORM, field: 'email', type: 'email', placeholder: 'N\xE3o enviaremos span, prometo', 'data-e2e-node': 'TextInput',
                'data-e2e-file': 'Lead'
            })
        ),
        React.createElement(
            'div',
            {
                'data-e2e-node': 'div',
                'data-e2e-file': 'Lead'
            },
            React.createElement(
                'h4',
                { className: css(styles.h4), 'data-e2e-node': 'h4',
                    'data-e2e-file': 'Lead'
                },
                ' Seu telefone '
            ),
            React.createElement(TextInput, { form: FORM, field: 'phone', type: 'tel', placeholder: 'Nem sms, dupla promessa', 'data-e2e-node': 'TextInput',
                'data-e2e-file': 'Lead'
            })
        ),
        React.createElement(
            'div',
            {
                'data-e2e-node': 'div',
                'data-e2e-file': 'Lead'
            },
            React.createElement(
                'h4',
                { className: css(styles.h4), 'data-e2e-node': 'h4',
                    'data-e2e-file': 'Lead'
                },
                ' Seu Nome '
            ),
            React.createElement(TextInput, { form: FORM, field: 'name', type: 'text', placeholder: 'Apenas agradecemos a prefer\xEAncia', 'data-e2e-node': 'TextInput',
                'data-e2e-file': 'Lead'
            })
        ),
        React.createElement(
            'p',
            { className: css(styles.hint), 'data-e2e-node': 'p',
                'data-e2e-file': 'Lead'
            },
            '* Preencha todos os campos.'
        ),
        React.createElement(ActionForm, {
            validate: function validate() {
                return true;
            },
            component: function component(action) {
                return React.createElement(
                    Button,
                    { onClick: action, 'data-e2e-node': 'Button',
                        'data-e2e-file': 'Lead'
                    },
                    'Enviar Dados'
                );
            },
            action: console.log,
            'data-e2e-node': 'ActionForm',
            'data-e2e-file': 'Lead'
        })
    );
};

var Lead = connect(function (_ref2) {
    var buttler = _ref2.buttler;
    return { buttler: buttler };
}, function (dispatch) {
    return { dispatch: dispatch };
})(LeadWrapped);

export default Lead;
//# sourceMappingURL=Lead.js.map