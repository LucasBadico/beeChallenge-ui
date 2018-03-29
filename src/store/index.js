import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import * as reducers from './reducers'
import * as epics from './epics'

const rootEpic = combineEpics(...epics)
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
