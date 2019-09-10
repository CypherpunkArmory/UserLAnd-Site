import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import * as reducers from './ducks'
import rootSagas from './ducks/rootSaga'
import { setCurrentAccount } from './ducks/account/actions'
import { renewSession } from './ducks/auth/actions'
import { getTokens, isTokenExpired } from './helpers/localStorage'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers({
    ...reducers,
  })
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware.run(rootSagas)

  if (typeof window !== 'undefined') {
    const authTokens = getTokens()

    if (authTokens && !isTokenExpired(authTokens.refresh_token)) {
      const account = {
        email: authTokens.email,
        APIKey: authTokens.access_token,
      }
      store.dispatch(setCurrentAccount(account))

      if (isTokenExpired(authTokens.access_token)) {
        store.dispatch(renewSession.request())
      }
    }
  }
  return store
}
