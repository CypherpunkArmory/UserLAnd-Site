import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Router } from '@reach/router'

import './account.module.scss'

import AccountMenu from './AccountMenu'
import AccountBilling from './AccountBilling'
import ApiKey from './ApiKey'
import AccountOverview from './AccountOverview'

class AccountManagement extends Component {
  static propTypes = {
    className: PropTypes.string,
    account: PropTypes.object,
  }

  render() {
    const { account } = this.props
    const routes = [
      { name: 'Account Overview', route: '/account/overview' },
      { name: 'Auth Key', route: '/account/key' },
      { name: 'Billing', route: '/account/billing' },
    ]

    return (
      <>
        <div styleName="main" className="page container">
          <AccountMenu routes={routes} />
          <Router className="w-100">
            <ApiKey APIKey={account.APIKey} path="/key" />
            <AccountOverview account={account} path="/overview" />
            <AccountOverview account={account} default />
            <AccountBilling path="/billing" />
          </Router>
        </div>
      </>
    )
  }
}

export default AccountManagement
