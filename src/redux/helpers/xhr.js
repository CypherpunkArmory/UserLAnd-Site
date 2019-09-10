import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import { getTokens, isTokenExpired } from './localStorage'
import { session } from '../../redux/ducks/auth/sagas'

const axiosInstance = axios.create({
  timeout: 5000,
  headers: {
    contentType: 'application/json',
    accept: 'application/json',
  },
})

const setAuthHeader = () => {
  const token = getTokens().access_token
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default function* xhr(
  config = {
    method: 'GET',
    data: {},
    responseType: 'json',
    headers: {},
  },
  options = { auth: false, actionCreator: null }
) {
  const { auth, actionCreator } = options

  try {
    if (auth) {
      const accessToken = getTokens().access_token
      if (isTokenExpired(accessToken)) {
        yield call(session)
        yield call(setAuthHeader)
      }
      yield call(setAuthHeader)
    }

    const response = yield call(axiosInstance, config)
    yield !!actionCreator && put(actionCreator.success(response.data))
    return response
  } catch (error) {
    const { data: exception } = error.response
    yield !!actionCreator &&
      put(
        actionCreator.failure(
          exception.data || { attributes: { details: exception.msg } }
        )
      )
    throw error
  }
}
