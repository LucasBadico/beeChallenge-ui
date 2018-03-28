import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import errorCatcher from './error-catcher'
import routes from '../routes'
import Store from '../store'

window.onerror = (msg, file, line, col, error) => { errorCatcher(error) }
window.addEventListener('unhandledrejection', (event) => { errorCatcher(event.reason) })

const store = new Store(browserHistory, window.INITIAL_STATE)
const history = syncHistoryWithStore(browserHistory, store.data)

// StyleSheet.rehydrate(window.RENDERED_CLASS_NAMES)

ReactDOM.render(
  <Router history={history} routes={routes} />,
  document.getElementById('mount')
)
