import React, { Component } from 'react'
import classnames from 'classnames'

import './sidebar.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import RecursiveMenu from './RecursiveMenu'
import Logo from '../Logo'
import Collapse from './Collapse'

class Sidebar extends Component {
  state = {
    sticky: false,
    top: 0,
    bottom: 0,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    const target = document.getElementById('main-nav')
    this.setState({ top: target.clientHeight })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const mainNav = document.getElementById('main-nav')
    const mainFooter = document.getElementById('footer')
    const currentScrollY = window.scrollY
    const viewHeight =
      window.innerHeight || document.documentElement.clientHeight
    const bodyHeight = document.body.clientHeight

    if (bodyHeight - mainFooter.clientHeight < viewHeight + currentScrollY) {
      this.setState({ top: 'unset', bottom: 0, sticky: false })
      return
    }

    if (currentScrollY !== this.state.top) {
      this.setState({
        sticky: true,
        top: mainNav.clientHeight,
        bottom: 'unset',
      })
    } else {
      this.setState({ sticky: false })
    }
  }

  render() {
    const { routes, isOpen, close, toggle, boundaryRef } = this.props
    const { sticky } = this.state

    return (
      <aside
        styleName={classnames('sidebar', {
          sidebar_open: isOpen,
          sticky: sticky,
        })}
        style={{ top: this.state.top, bottom: this.state.bottom }}
        ref={boundaryRef}
      >
        <Logo styleName="sidebar__brand" />
        <button
          styleName="sidebar__btn"
          onClick={toggle}
          aria-label="documentation button"
        >
          {isOpen ? (
            <FontAwesomeIcon icon={['fa', 'times']} />
          ) : (
            <FontAwesomeIcon icon={['fa', 'book']} />
          )}
        </button>
        <RecursiveMenu navClose={close} routes={routes} />
      </aside>
    )
  }
}

export default Collapse(Sidebar)
