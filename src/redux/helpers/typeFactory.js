function createRequestTypes(base) {
  const REQUEST = 'REQUEST'
  const SUCCESS = 'SUCCESS'
  const FAILURE = 'FAILURE'

  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

export default createRequestTypes
