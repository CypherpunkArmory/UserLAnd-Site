import types from './types'
import _ from 'lodash'
import {
  createReducer,
  requestHandler,
  failureHandler,
} from '../../helpers/createReducer'

const initState = {
  account: { email: '', APIKey: '' },
  isLoading: false,
  error: null,
}

const successHandler = (state, action) => {
  return {
    ...state,
    account: {
      ...state.account,
      ...action.payload.account,
    },
    isLoading: false,
    error: null,
  }
}

const setAccount = (state, action) => {
  return {
    ...state,
    account: action.payload.account,
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

const actionTypes = [
  ..._.values(types.REGISTER),
  ..._.values(types.UPDATE_ACCOUNT),
  ..._.values(types.DELETE_ACCOUNT),
  ..._.values(types.SEND_EMAIL_CONFIRMATION),
  ..._.values(types.SEND_RESET_EMAIL),
  ..._.values(types.RESET_PASSWORD),
  ..._.values(types.GET_CONFIRMATION_TOKEN),
  ..._.values(types.REVOKE_TOKEN),
  types.SET_CURRENT_ACCOUNT,
]

const reducer = createReducer(initState, actionTypes, {
  ...handlerMapping(actionTypes),
  [types.SET_CURRENT_ACCOUNT]: setAccount,
})
export default reducer
