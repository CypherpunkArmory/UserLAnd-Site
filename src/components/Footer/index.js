import React, { Component } from 'react'
import { Link } from 'gatsby'

import './index.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import footerLogo from './LogoHeader.svg'
import GooglePlay from '../Button/GooglePlay'
import AppleStore from '../Button/AppleStore'

class Footer extends Component {
  render() {
    return (
      <footer className="footer" id="footer">
        <div className="container">
          <div className="row">
            <div className="footer__logo col-12">
              <img className="img-fluid" src={footerLogo} alt="UserLAnd Logo" />
            </div>
            <div className="footer__cta col-12">
              <GooglePlay />
              <AppleStore />
            </div>
            <nav className="navbar footer__nav col-12 offset-lg-2 col-lg-3 order-md-2">
              <ul className="flex-row navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/privacy">
                    privacy policy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/eula">
                    EULA
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="navbar footer__nav col-12 col-lg-3 order-md-3">
              <ul className="flex-row navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-label="github"
                    href="https://github.com/CypherpunkArmory/UserLAnd"
                  >
                    <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-label="twitter"
                    href="https://twitter.com/userlandtech"
                  >
                    <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-label="slack"
                    href="https://communityinviter.com/apps/userlandtech/userland"
                  >
                    <FontAwesomeIcon icon={['fab', 'slack']} size="lg" />
                  </a>
                </li>
              </ul>
            </nav>
            <small className="footer__copy col-12 col-lg-4 order-md-1">
              &copy; UserLand, All rights reserved.
            </small>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
