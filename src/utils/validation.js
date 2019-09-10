import { isEmail } from 'validator'
import { isEmpty } from 'lodash'

export const validateInput = data => {
  let errors = {}

  if (data.hasOwnProperty('email')) {
    if (isEmpty(data.email)) {
      errors.email = 'This field is required'
    }
    if (!isEmail(data.email, { domain_specific_validation: true })) {
      errors.email = 'Email is invalid'
    }
  }

  if (data.hasOwnProperty('password') && isEmpty(data.password)) {
    errors.password = 'This field is required'
  }

  if (data.hasOwnProperty('oldPassword') && isEmpty(data.oldPassword)) {
    errors.oldPassword = 'This field is required'
  }

  if (data.hasOwnProperty('newPassword') && isEmpty(data.newPassword)) {
    errors.newPassword = 'This field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
