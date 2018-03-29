import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { Button, TextInput, TitleModule, TitlePage, ModuleCel, TableRow, TableCel } from './components';

import { Calculator } from './domains';

var App = function App(_ref) {
  var isPinging = _ref.isPinging,
      ping = _ref.ping;
  return React.createElement(
    'div',
    {
      'data-e2e-node': 'div',
      'data-e2e-file': 'routes'
    },
    React.createElement(
      'h1',
      {
        'data-e2e-node': 'h1',
        'data-e2e-file': 'routes'
      },
      'is pinging: ',
      isPinging.toString()
    ),
    React.createElement(
      'button',
      { onClick: ping, 'data-e2e-node': 'button',
        'data-e2e-file': 'routes'
      },
      'Start PING'
    )
  );
};

App = connect(function (_ref2) {
  var isPinging = _ref2.pingReducer.isPinging;
  return { isPinging: isPinging };
}, function (dispatch) {
  return { ping: function ping() {
      return dispatch({ type: 'PING' });
    } };
})(App);

export default React.createElement(
  Switch,
  {
    'data-e2e-node': 'Switch',
    'data-e2e-file': 'routes'
  },
  React.createElement(Route, { path: '/FaleMais', component: Calculator, 'data-e2e-node': 'Route',
    'data-e2e-file': 'routes'
  }),
  React.createElement(Route, { path: '/ping', component: App, 'data-e2e-node': 'Route',
    'data-e2e-file': 'routes'
  }),
  React.createElement(Route, { path: '/hello', component: function component() {
      return React.createElement(
        'div',
        {
          'data-e2e-node': 'div',
          'data-e2e-file': 'routes'
        },
        React.createElement(
          TitlePage,
          {
            'data-e2e-node': 'TitlePage',
            'data-e2e-file': 'routes'
          },
          'HELLO FROM REACT!'
        ),
        React.createElement(
          ModuleCel,
          {
            'data-e2e-node': 'ModuleCel',
            'data-e2e-file': 'routes'
          },
          React.createElement(
            'form',
            {
              'data-e2e-node': 'form',
              'data-e2e-file': 'routes'
            },
            React.createElement(
              TitleModule,
              {
                'data-e2e-node': 'TitleModule',
                'data-e2e-file': 'routes'
              },
              ' teste de titulo'
            ),
            React.createElement(TextInput, { type: 'text', placeholder: 'Um exemplo de input', 'data-e2e-node': 'TextInput',
              'data-e2e-file': 'routes'
            }),
            React.createElement(TextInput, { type: 'text', placeholder: 'Um exemplo de input', 'data-e2e-node': 'TextInput',
              'data-e2e-file': 'routes'
            }),
            React.createElement(
              Button,
              {
                'data-e2e-node': 'Button',
                'data-e2e-file': 'routes'
              },
              ' Exemplo de bot\xE3o '
            )
          )
        ),
        React.createElement(
          TableRow,
          {
            'data-e2e-node': 'TableRow',
            'data-e2e-file': 'routes'
          },
          React.createElement(TableCel, { title: 'Table 1', subitems: ['item 1', 'item 1', 'item 1'], 'data-e2e-node': 'TableCel',
            'data-e2e-file': 'routes'
          }),
          React.createElement(TableCel, { title: 'Table 1', subitems: ['item 1', 'item 1', 'item 1'], 'data-e2e-node': 'TableCel',
            'data-e2e-file': 'routes'
          }),
          React.createElement(TableCel, { title: 'Table 1', subitems: ['item 1', 'item 1', 'item 1'], 'data-e2e-node': 'TableCel',
            'data-e2e-file': 'routes'
          }),
          React.createElement(TableCel, { title: 'Table 1', subitems: ['item 1', 'item 1', 'item 1'], 'data-e2e-node': 'TableCel',
            'data-e2e-file': 'routes'
          })
        )
      );
    }, 'data-e2e-node': 'Route',
    'data-e2e-file': 'routes'
  }),
  React.createElement(Route, { path: '/button', component: function component() {
      return React.createElement(
        Button,
        {
          'data-e2e-node': 'Button',
          'data-e2e-file': 'routes'
        },
        ' Exemplo de bot\xE3o '
      );
    }, 'data-e2e-node': 'Route',
    'data-e2e-file': 'routes'
  }),
  React.createElement(Route, { path: '/text-input', component: function component() {
      return React.createElement(TextInput, { type: 'text', placeholder: 'Um exemplo de input', 'data-e2e-node': 'TextInput',
        'data-e2e-file': 'routes'
      });
    }, 'data-e2e-node': 'Route',
    'data-e2e-file': 'routes'
  }),
  React.createElement(Route, { path: '/styled-title', component: function component() {
      return React.createElement(
        TitleModule,
        {
          'data-e2e-node': 'TitleModule',
          'data-e2e-file': 'routes'
        },
        ' teste de titulo'
      );
    }, 'data-e2e-node': 'Route',
    'data-e2e-file': 'routes'
  })
);
//# sourceMappingURL=routes.js.map