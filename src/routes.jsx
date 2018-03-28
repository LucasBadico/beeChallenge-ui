import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styles from './styles'
import { css } from 'aphrodite'
export default (
  <Switch>
    <Route path='/hello' component={() => <h1 className={css(styles.test)}>HELLO FROM REACT!</h1>} />
  </Switch>
)