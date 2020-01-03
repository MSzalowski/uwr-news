import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
  AnyAction,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import newsReducer from './news'
import appReducer from './app'
import rootSaga from './rootSaga'
import { Reducer, StateType } from 'typesafe-actions'

export const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootStore = combineReducers({ newsReducer, appReducer })

const rootReducer: Reducer<
  StateType<typeof rootStore>,
  AnyAction
> = createStore(rootStore, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default rootReducer
