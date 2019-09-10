import React from 'react'
import { navigate } from 'gatsby'

const PrivateRoute = ({
  component: Component,
  location,
  isLoggedIn,
  ...rest
}) => {
  if (!isLoggedIn && location.pathname !== `/login`) {
    // If the user is not logged in, redirect to the login page.
    typeof window !== 'undefined' && navigate(`/login`)
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
