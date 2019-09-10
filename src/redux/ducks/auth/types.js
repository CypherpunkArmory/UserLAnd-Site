import createRequestTypes from '../../helpers/typeFactory'

const EMAIL_LOGIN = createRequestTypes('userland/auth/LOGIN')
const LOGOUT = createRequestTypes('userland/auth/LOGOUT')
const RENEW_SESSION = createRequestTypes('userland/auth/RENEW_SESSION')

export default {
  EMAIL_LOGIN,
  LOGOUT,
  RENEW_SESSION,
}
