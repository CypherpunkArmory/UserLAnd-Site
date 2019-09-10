import decode from 'jwt-decode'

export const setTokens = JWTokens => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('authToken', JSON.stringify(JWTokens))
    return true
  }
  return false
}

export const clearTokens = () => {
  return localStorage.removeItem('authToken')
}

export const isTokenExpired = token => {
  try {
    const decodedToken = decode(token)
    const now = Date.now().valueOf() / 1000
    return decodedToken.exp < now ? true : false
  } catch (error) {
    return undefined
  }
}

export const getTokens = () => {
  try {
    const JWTokens = JSON.parse(localStorage.getItem('authToken')) || undefined
    return JWTokens
  } catch (err) {
    return undefined
  }
}
