import { call, put, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { navigate } from 'gatsby'
import types from './types'

import { performEmailLogin, performLogout, renewSession } from './actions'
import { setCurrentAccount } from '../account/actions'
import xhr from '../../helpers/xhr'
import { setTokens, clearTokens, getTokens } from '../../helpers/localStorage'
import apiEndpoints from '../../helpers/apiEndpoints'

export function* emailLogin(action) {
  const xhrConfig = {
    method: 'POST',
    data: {
      email: action.payload.email,
      password: action.payload.password,
    },
    responseType: 'json',
    url: apiEndpoints.emailLogin,
  }

  try {
    const sessionRequest = yield call(xhr, xhrConfig, {
      auth: false,
      actionCreator: performEmailLogin,
    })
    const JWTokens = sessionRequest.data
    const account = {
      email: action.payload.email,
      APIKey: JWTokens.access_token,
    }

    setTokens({ ...JWTokens, email: account.email })
    yield put(setCurrentAccount(account))
    yield navigate('/account/overview')

    return JWTokens
  } catch (error) {
    return error
  }
}

export function* logout() {
  put(performLogout.request())
  try {
    yield put(performLogout.success())
    yield put(
      setCurrentAccount({
        email: '',
        APIKey: '',
      })
    )
    clearTokens()
    return {}
  } catch (error) {
    yield put(performLogout.failure(error))
  }
}

export function* session() {
  const JWTokens = getTokens()
  const xhrConfig = {
    method: 'PUT',
    responseType: 'json',
    url: apiEndpoints.session,
    headers: {
      Authorization: `Bearer ${JWTokens.refresh_token}`,
    },
  }

  try {
    const sessionRequest = yield call(xhr, xhrConfig, {
      auth: false,
      actionCreator: renewSession,
    })
    const newTokens = sessionRequest.data
    const account = {
      email: JWTokens.email,
      APIKey: newTokens.access_token,
    }

    setTokens({ ...JWTokens, ...newTokens })
    yield put(setCurrentAccount(account))
    return newTokens
  } catch (error) {
    if (error.response.status === 401) {
      yield navigate('/login', {
        state: {
          errorMessage: `Your session expired, please log in again.`,
        },
      })
      yield call(delay, 100)
      yield put(performLogout.request())
    }
    return error
  }
}

export default function* watchAuth() {
  return [
    yield takeEvery(types.EMAIL_LOGIN['REQUEST'], emailLogin),
    yield takeEvery(types.LOGOUT['REQUEST'], logout),
    yield takeEvery(types.RENEW_SESSION['REQUEST'], session),
  ]
}
