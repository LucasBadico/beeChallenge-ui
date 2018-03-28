import React from 'react'
import { Route, Switch } from 'react-router-dom'

export default (
  <Switch>
    <Route path='/hey' component={() => <h1>HELLO FROM REACT!</h1>} />
  </Switch>
)