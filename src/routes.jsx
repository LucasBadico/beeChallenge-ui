import React from 'react'
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


export default (
  <Switch>
    <Route path='/FaleMais' component={Calculator} />
    

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