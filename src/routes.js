import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import './elemental.less'
import styles from './style.scss'

export default (
  <Switch>
    <Route path='/hey' component={() => <h1 className={styles.bottomBar}>HELLO FROM REACT!</h1>} />
  </Switch>
)