import { createSelector } from 'reselect'
import { getTokens } from '../../helpers/localStorage'

const getAccount = state => state.accountState.account

export const authIsLoading = state => state.authState.isLoading

export const getError = state => state.authState.error

export const getIsLoggedIn = createSelector(
  [getAccount, getTokens],
  (account, authState) => !!account && !!account.email && !!authState
)
