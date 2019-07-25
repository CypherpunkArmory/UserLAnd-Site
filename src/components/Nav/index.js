import React, { Component } from 'react'
import { Link } from 'gatsby'

import './index.css'

import Logo from '../Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg pt-3 position-absolute w-100">
        <div className="container">
          <Link
            className="navbar-brand"
            to="/"
            aria-label="home"
            title="Go to Home Page"
          >
            <Logo siteTitle={this.props.siteTitle} />
          </Link>
          <ul className="flex-row navbar-nav ml-auto">
            <li className="nav-item mr-3">
              <Link className="nav-link" to="/features">
                Features
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link" to="/download">
                Download
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link" to="/signup">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav
