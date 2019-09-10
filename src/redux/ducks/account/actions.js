import types from './types'
import actionFactory from '../../helpers/actionFactory'

export const performRegister = {
  request: (email, password) =>
    actionFactory(types.REGISTER['REQUEST'], {
      email,
      password,
    }),
  success: account => actionFactory(types.REGISTER['SUCCESS'], { account }),
  failure: error => actionFactory(types.REGISTER['FAILURE'], { error }),
}

export const sendResetEmail = {
  request: email => actionFactory(types.SEND_RESET_EMAIL['REQUEST'], { email }),
  success: account =>
    actionFactory(types.SEND_RESET_EMAIL['SUCCESS'], { account }),
  failure: error => actionFactory(types.SEND_RESET_EMAIL['FAILURE'], { error }),
}

export const getConfirmationToken = {
  request: JWToken =>
    actionFactory(types.GET_CONFIRMATION_TOKEN['REQUEST'], { JWToken }),
  success: () => actionFactory(types.GET_CONFIRMATION_TOKEN['SUCCESS'], {}),
  failure: error =>
    actionFactory(types.GET_CONFIRMATION_TOKEN['FAILURE'], { error }),
}

export const updateAccount = {
  request: newDetails =>
    actionFactory(types.UPDATE_ACCOUNT['REQUEST'], { newDetails }),
  success: account =>
    actionFactory(types.UPDATE_ACCOUNT['SUCCESS'], { account: account.data.attributes }),
  failure: error => actionFactory(types.UPDATE_ACCOUNT['FAILURE'], { error }),
}

export const deleteAccount = {
  request: password =>
    actionFactory(types.DELETE_ACCOUNT['REQUEST'], { password }),
  success: () => actionFactory(types.DELETE_ACCOUNT['SUCCESS'], {}),
  failure: error => actionFactory(types.DELETE_ACCOUNT['FAILURE'], { error }),
}

export const resetPassword = {
  request: new_password => actionFactory(types.RESET_PASSWORD['REQUEST'], { new_password }),
  success: () => actionFactory(types.RESET_PASSWORD['SUCCESS'], {}),
  failure: error => actionFactory(types.RESET_PASSWORD['FAILURE'], { error }),
}

export const sendEmailConfirmation = {
  request: email =>
    actionFactory(types.SEND_EMAIL_CONFIRMATION['REQUEST'], { email }),
  success: account =>
    actionFactory(types.SEND_EMAIL_CONFIRMATION['SUCCESS'], { account }),
  failure: error =>
    actionFactory(types.SEND_EMAIL_CONFIRMATION['FAILURE'], { error }),
}

export const revokeTokens = {
  request: () =>
    actionFactory(types.REVOKE_TOKEN['REQUEST'], {}),
  success: JWToken =>
    actionFactory(types.REVOKE_TOKEN['SUCCESS'], { JWToken }),
  failure: error =>
    actionFactory(types.REVOKE_TOKEN['FAILURE'], { error }),
}

export const setCurrentAccount = account =>
  actionFactory(types.SET_CURRENT_ACCOUNT, { account })

export default {
  performRegister,
  sendResetEmail,
  getConfirmationToken,
  updateAccount,
  deleteAccount,
  sendEmailConfirmation,
  setCurrentAccount,
  revokeTokens,
}
