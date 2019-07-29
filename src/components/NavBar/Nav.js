import React from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'

import './navbar.module.scss'

export default function Nav({ children, routes, handlesOnClick, location }) {
  return (
    <ul styleName="nav">
      {routes.map(item => {
        return (
          <li key={item.name}>
            <Link
              styleName="nav__link"
              className={classnames({
                active: location.pathname.indexOf(item.route) > -1,
              })}
              to={item.route}
              onClick={handlesOnClick}
            >
              {item.name}
            </Link>
          </li>
        )
      })}
      {children}
    </ul>
  )
}
