import React, { Component } from 'react'
import { Router } from '@reach/router'
import { connect } from 'react-redux'

import AccountManagement from '../components/Account/AccountManagement'
import PrivateRoute from '../components/PrivateRoute'

import { getAccountDetails } from '../redux/ducks/account/selectors'

import { getIsLoggedIn } from '../redux/ducks/auth/selectors'

import ResetPassword from '../components/Account/ResetPassword'

class AccountPage extends Component {
  render() {
    const { isLoggedIn, account } = this.props

    return (
      <Router>
        <PrivateRoute
          path="/account/*"
          component={AccountManagement}
          account={account}
          isLoggedIn={isLoggedIn}
        />
        <ResetPassword path="/account/confirm/:token" />
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: getIsLoggedIn(state),
    account: getAccountDetails(state),
  }
}

export default connect(
  mapStateToProps,
  null
)(AccountPage)
