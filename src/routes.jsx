import React from 'react'
import {connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import {
  Button,
  TextInput,
  TitleModule,
  TitlePage,
  ModuleCel,
  TableRow,
  TableCel,
} from 'components'

import {
  Calculator
} from 'domains'


let App = ({ isPinging, ping }) => (
  <div>
    <h1>is pinging: {isPinging.toString()}</h1>
    <button onClick={ping}>Start PING</button>
  </div>
);

App = connect(
  ({ pingReducer: { isPinging } }) => ({ isPinging }),
  dispatch => ({ ping: () => dispatch({ type: 'PING' } )})
)(App);

export default (
  <Switch>
    <Route path='/FaleMais' component={Calculator} />
    
    <Route path='/ping' component={App} />
    <Route path='/hello' component={() =>(
      <div>
        <TitlePage>HELLO FROM REACT!</TitlePage>
        <ModuleCel>
          <form>
          <TitleModule> teste de titulo</TitleModule>
          <TextInput type="text" placeholder="Um exemplo de input"/>
          <TextInput type="text" placeholder="Um exemplo de input"/>
          <Button> Exemplo de botão </Button>
          </form>
        </ModuleCel>
        <TableRow>
          <TableCel title="Table 1" subitems={['item 1','item 1','item 1',]}/>
          <TableCel title="Table 1" subitems={['item 1','item 1','item 1',]}/>
          <TableCel title="Table 1" subitems={['item 1','item 1','item 1',]}/>
          <TableCel title="Table 1" subitems={['item 1','item 1','item 1',]}/>
        </TableRow>

      </div>)
    } />
    <Route path='/button' component={() => <Button> Exemplo de botão </Button>} />
    <Route path='/text-input' component={() => <TextInput type="text" placeholder="Um exemplo de input"/>} />
    <Route path='/styled-title' component={() => <TitleModule> teste de titulo</TitleModule>} />
  </Switch>
)