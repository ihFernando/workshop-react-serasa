import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import RootReducer from './RootReducer'
import RootSaga from './RootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	RootReducer,
	applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(RootSaga)

export default store