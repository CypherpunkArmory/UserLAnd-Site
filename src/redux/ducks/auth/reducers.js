import types from './types'
import _ from 'lodash'
import {
  createReducer,
  requestHandler,
  failureHandler,
} from '../../helpers/createReducer'

const initState = {
  isLoading: false,
  error: null,
}

const successHandler = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
  }
}

const handlerMapping = actionTypes => {
  return actionTypes.reduce((prev, curr) => {
    prev[curr] = successHandler
    if (curr.includes('REQUEST')) prev[curr] = requestHandler
    if (curr.includes('SUCCESS')) prev[curr] = successHandler
    if (curr.includes('FAILURE')) prev[curr] = failureHandler
    return prev
  }, {})
}

const actionTypes = [..._.values(types.EMAIL_LOGIN), ..._.values(types.LOGOUT), ..._.values(types.RENEW_SESSION)]

const reducer = createReducer(initState, actionTypes, {
  ...handlerMapping(actionTypes),
})
export default reducer
