import React from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  Button,
  TextInput,
  TitleModule,
  TitlePage,
  Module,
} from 'components'


export default (
  <Switch>
    <Route path='/hello' component={() =>(
      <div>
        <TitlePage>HELLO FROM REACT!</TitlePage>
        <Module>
          <form>
          <TitleModule> teste de titulo</TitleModule>
          <TextInput type="text" placeholder="Um exemplo de input"/>
          <TextInput type="text" placeholder="Um exemplo de input"/>
          <Button> Exemplo de botão </Button>
          </form>
        </Module>
      </div>)
    } />
    <Route path='/button' component={() => <Button> Exemplo de botão </Button>} />
    <Route path='/text-input' component={() => <TextInput type="text" placeholder="Um exemplo de input"/>} />
    <Route path='/styled-title' component={() => <TitleModule> teste de titulo</TitleModule>} />
  </Switch>
)