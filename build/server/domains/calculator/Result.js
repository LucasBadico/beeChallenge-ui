import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import Select from 'react-select';

import { TableCel, TableRow, TitleModule } from '../../components';
import styles from './styles';

var Result = function Result(_ref) {
    var items = _ref.items;
    return React.createElement(
        TableRow,
        {
            'data-e2e-node': 'TableRow',
            'data-e2e-file': 'Result'
        },
        React.createElement(
            TitleModule,
            {
                'data-e2e-node': 'TitleModule',
                'data-e2e-file': 'Result'
            },
            'Resultados'
        ),
        React.createElement(
            'p',
            {
                'data-e2e-node': 'p',
                'data-e2e-file': 'Result'
            },
            'Confira os resultados e confirme, com ',
            React.createElement(
                'b',
                {
                    'data-e2e-node': 'b',
                    'data-e2e-file': 'Result'
                },
                'BeePhonica'
            ),
            ' voc\xEA ganha sempre!'
        ),
        React.createElement(TableCel, { title: 'Padr\xE3o', subitems: ['<b>1.9<b> preço padrão', '<b>1.9<b> custo/minuto médio', '<b>1.9</b> custo/minuto após o tempo do plano'], 'data-e2e-node': 'TableCel',
            'data-e2e-file': 'Result'
        }),
        React.createElement(TableCel, { title: 'Fale Mais 30', subitems: ['item 1', 'item 1', 'item 1'], 'data-e2e-node': 'TableCel',
            'data-e2e-file': 'Result'
        }),
        React.createElement(TableCel, { title: 'Fale Mais 60', subitems: ['item 1', 'item 1', 'item 1'], 'data-e2e-node': 'TableCel',
            'data-e2e-file': 'Result'
        }),
        React.createElement(TableCel, { title: 'Fale Mais 120', subitems: ['item 1', 'item 1', 'item 1'], 'data-e2e-node': 'TableCel',
            'data-e2e-file': 'Result'
        })
    );
};

export default Result;
//# sourceMappingURL=Result.js.map