import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import log from 'log'
import * as reducers from './reducers'

import {
  openLeadOnNotFinded,
  buttlerWillOpenForm,
  buttlerWillCloseForm,
  buttlerShowTable,
  sendFormToService,
  handlePrices,
} from './epics'

const rootEpic = combineEpics(
  openLeadOnNotFinded,
  buttlerWillOpenForm,
  buttlerWillCloseForm,
  sendFormToService,
  handlePrices,
)

const epicMiddleware = createEpicMiddleware(rootEpic)

export function createReducer(initialState, actionHandlers) {
  return function reducer(state = initialState, action) {
    if (actionHandlers.hasOwnProperty(action.type)) {
      return actionHandlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export default class Store {
  constructor(history, initialState = {}) {
    this.data = createStore(
      combineReducers({
        ...reducers,
        routing: routerReducer,
      }),
      initialState,
        applyMiddleware(
          epicMiddleware,
          routerMiddleware(history),
        ),
    )
}
}
