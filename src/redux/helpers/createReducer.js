import { isFunction, isEmpty } from 'lodash'

export const defaultHandler = (state, action) => ({
  ...state,
  ...action.payload,
})

export const requestHandler = (state, action) => ({
  ...state,
  isLoading: true,
  error: null,
})

export const failureHandler = (state, action) => ({
  ...state,
  ...action.payload,
  isLoading: false,
})

export const successHandler = (state, action) => {
  return {
    ...state,
    ...action.payload,
    isLoading: false,
    error: null,
  }
}

const getActionHandler = (customHandlers, state, action) =>
  !isEmpty(customHandlers) && isFunction(customHandlers[action.type])
    ? customHandlers[action.type](state, action)
    : defaultHandler(state, action)

export const createReducer = (initialState, actionTypes, customHandlers) => (
  state = initialState,
  action
) =>
  actionTypes.includes(action.type)
    ? getActionHandler(customHandlers, state, action)
    : state

export default createReducer
