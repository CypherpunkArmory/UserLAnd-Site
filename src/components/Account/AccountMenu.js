import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './account.module.scss'

class AccountMenu extends Component {
  static propTypes = {
    routes: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
  }
  render() {
    const { routes } = this.props

    return (
      <ul styleName="nav">
        {routes.map(item => {
          return (
            <li key={item.name}>
              <Link to={item.route}>{item.name}</Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default AccountMenu
