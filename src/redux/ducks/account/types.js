import createRequestTypes from '../../helpers/typeFactory'

const REGISTER = createRequestTypes('userland/account/REGISTER')
const DELETE_ACCOUNT = createRequestTypes('userland/account/DELETE_ACCOUNT')
const UPDATE_ACCOUNT = createRequestTypes('userland/account/UPDATE_ACCOUNT')
const SET_CURRENT_ACCOUNT = 'userland/account/SET_CURRENT_ACCOUNT'
const GET_CONFIRMATION_TOKEN = createRequestTypes('userland/account/GET_CONFIRMATION_TOKEN')
const SEND_RESET_EMAIL = createRequestTypes('userland/account/SEND_RESET_EMAIL')
const RESET_PASSWORD = createRequestTypes('userland/account/RESET_PASSWORD')
const SEND_EMAIL_CONFIRMATION = createRequestTypes('userland/account/SEND_EMAIL_CONFIRMATION')
const REVOKE_TOKEN = createRequestTypes('userland/account/REVOKE_TOKEN')
const UPGRADE_PLAN = createRequestTypes('userland/account/UPGRADE_PLAN')

export default {
  REGISTER,
  UPDATE_ACCOUNT,
  DELETE_ACCOUNT,
  SET_CURRENT_ACCOUNT,
  GET_CONFIRMATION_TOKEN,
  SEND_RESET_EMAIL,
  RESET_PASSWORD,
  SEND_EMAIL_CONFIRMATION,
  REVOKE_TOKEN,
  UPGRADE_PLAN,
}
