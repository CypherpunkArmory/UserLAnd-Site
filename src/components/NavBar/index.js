import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './navbar.module.scss'

import Logo from '../Logo'
import Collapse from './Collapse'
import Sticky from './Sticky'
import Nav from './Nav'
import MaintenanceBanner from '../Banner/Maintenance'

class NavBar extends Component {
  static propTypes = {
    className: PropTypes.string,
    routes: PropTypes.array,
    isOpen: PropTypes.bool,
    close: PropTypes.func,
    toggle: PropTypes.func,
    siteMaintenance: PropTypes.bool,
  }

  static defaultProps = {
    routes: [{ name: 'Home', route: '/' }],
    sticky: false,
    siteMaintenance: false,
  }

  render() {
    const {
      boundaryRef,
      toggle,
      close,
      isOpen,
      scrolled,
      sticky,
      border,
      siteMaintenance,
    } = this.props
    const { location } = this.props
    let { routes } = this.props

    return (
      <nav
        styleName={classnames('navbar', {
          navbar_open: isOpen,
          navbar_scrolled: scrolled,
          navbar_sticky: sticky,
          navbar__border: border,
        })}
        id="main-nav"
        ref={boundaryRef}
      >
        {siteMaintenance && (
          <MaintenanceBanner message="Currently under maintanance, some things might not work properly." />
        )}
        <div className="container">
          <div styleName="navbar__controls">
            <Link
              styleName="brand"
              to="/"
              title="Userland Home"
              aria-label="home"
            >
              <Logo />
            </Link>
            <button styleName="btn" onClick={toggle} aria-label="menu">
              <div styleName="btn__bars">
                <span styleName="btn__bar" />
                <span styleName="btn__bar" />
                <span styleName="btn__bar" />
              </div>
            </button>
          </div>
          <Nav routes={routes} handlesOnClick={close} location={location}>
            <li>
              <a
                styleName="nav__link"
                href="https://github.com/CypherpunkArmory/UserLAnd/issues"
              >
                Support
              </a>
            </li>
            <li>
              <a
                styleName="nav__link"
                aria-label="twitter"
                href="https://github.com/CypherpunkArmory/UserLAnd"
              >
                <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
              </a>
            </li>
          </Nav>
        </div>
      </nav>
    )
  }
}

export default Sticky(Collapse(NavBar))
