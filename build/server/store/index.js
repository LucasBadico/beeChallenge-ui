var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import log from '../log';
import * as reducers from './reducers';

import { openLeadOnNotFinded, buttlerWillOpenForm, buttlerWillCloseForm, buttlerShowTable, fetchService } from './epics';

var rootEpic = combineEpics(openLeadOnNotFinded, buttlerWillOpenForm, buttlerWillCloseForm, fetchService
// buttlerShowTable,
);

var epicMiddleware = createEpicMiddleware(rootEpic);

export function createReducer(initialState, actionHandlers) {
  return function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    if (actionHandlers.hasOwnProperty(action.type)) {
      return actionHandlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

// const composeEnhancers = window ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

var Store = function Store(history) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, Store);

  this.data = createStore(combineReducers(_extends({}, reducers, {
    routing: routerReducer
  })), initialState,
  // composeEnhancers(
  applyMiddleware(epicMiddleware, routerMiddleware(history))
  // )
  );
};

export default Store;
//# sourceMappingURL=index.js.map