import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import * as reducers from './reducers'
import * as epics from './epics'


const PING = 'PING';
const PONG = 'PONG';

const ping = () => ({ type: PING });

const pingEpic = action$ =>
  action$.ofType(PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: PONG });

const pingReducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case PING:
      return { isPinging: true };

    case PONG:
      return { isPinging: false };

    default:
      return state;
  }
};


const rootEpic = combineEpics(epics.forms, pingEpic)
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
// const composeEnhancers = window ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

export default class Store {
  constructor(history, initialState = {}) {
    this.data = createStore(
      combineReducers({
        ...reducers, pingReducer,
        routing: routerReducer,
      }),
      initialState,
      // composeEnhancers(
        applyMiddleware(
          epicMiddleware,
          routerMiddleware(history),
        ),
      // )
    )
}
}
