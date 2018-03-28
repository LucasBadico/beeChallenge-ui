import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import * as reducers from './reducers'
import * as epics from './epics'

const rootEpic = combineEpics(...epics)
const epicMiddleware = createEpicMiddleware(rootEpic)

export default class Store {
  constructor(history, initialState = {}) {
    const reducer = combineReducers({
      ...reducers,
      routing: routerReducer,
    })

    this.data = createStore(
      combineReducers({
        ...reducers,
        routing: routerReducer,
      }),
      initialState,
      compose(
        applyMiddleware(
          epicMiddleware,
          routerMiddleware(history),
        ),
      )
    )
}
}
