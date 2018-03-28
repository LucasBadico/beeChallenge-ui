import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styles from './styles'
import { css } from 'aphrodite'

import {
  Button,
  TextInput,
  TitleModule,
} from 'components'


export default (
  <Switch>
    <Route path='/hello' component={() => <div className={css(styles.body)}>  <TitleModule>HELLO FROM REACT!</TitleModule> </div>} />
    <Route path='/button' component={() => <Button> Exemplo de botão </Button>} />
    <Route path='/text-input' component={() => <TextInput type="text" placeholder="Um exemplo de input"/>} />
    <Route path='/styled-title' component={() => <TitleModule> teste de titulo</TitleModule>} />
  </Switch>
)