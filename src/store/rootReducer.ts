import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import newsReducer from './news'
import rootSaga from './rootSaga'

export const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  newsReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)
