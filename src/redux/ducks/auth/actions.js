import types from './types'
import actionFactory from '../../helpers/actionFactory'

export const performLogout = {
  request: () => actionFactory(types.LOGOUT['REQUEST'], {}),
  success: () => actionFactory(types.LOGOUT['SUCCESS'], {}),
  failure: error => actionFactory(types.LOGOUT['FAILURE'], { error }),
}

export const performEmailLogin = {
  request: (email, password) =>
    actionFactory(types.EMAIL_LOGIN['REQUEST'], { email, password }),
  success: () => actionFactory(types.EMAIL_LOGIN['SUCCESS'], {}),
  failure: error => actionFactory(types.EMAIL_LOGIN['FAILURE'], { error }),
}

export const renewSession = {
  request: refreshToken =>
    actionFactory(types.RENEW_SESSION['REQUEST'], { refreshToken }),
  success: tokens => actionFactory(types.RENEW_SESSION['SUCCESS'], { tokens }),
  failure: error => actionFactory(types.RENEW_SESSION['FAILURE'], { error }),
}

export default {
  performEmailLogin,
  performLogout,
  renewSession,
}
