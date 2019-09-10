const origin =
  process.env.NODE_ENV === 'development' ? 'http://localhost:5000/' : 'https://api.userland.tech/'

export default {
  // Accounts
  emailLogin: `${origin}login`,
  session: `${origin}session`,
  logout: `${origin}logout`,
  register: `${origin}account`,
  resetPassword: `${origin}account/token`,
  revokeTokens: `${origin}account/token`,
  updateAccount: `${origin}account`,
  resendConfirmationEmail: `${origin}account/token`,
  confirmationToken: `${origin}account/confirm`,
}
