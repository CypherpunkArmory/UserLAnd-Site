import { createSelector } from 'reselect'

const getAccount = state => state.accountState.account
export const accountIsLoading = state => state.accountState.isLoading

export const getError = state => state.accountState.error

export const getIsLoggedIn = createSelector(
  [getAccount],
  account => !!account && !!account.access_token
)

export const getAccountDetails = createSelector(
  [getAccount],
  account => account
)

export const getIsAccountDetailLoaded = createSelector(
  [getAccount],
  account => !!account
)
