import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './modal.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default class Modal extends Component {
  static propTypes = {
    handlesClose: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node,
  }

  componentDidMount() {
    document.body.classList.add('no-scroll')
  }
  componentWillUnmount() {
    document.body.classList.remove('no-scroll')
  }
  render() {
    const { children, handlesClose, className } = this.props
    return (
      <div className={className} styleName="modal">
        <div styleName="modal__card">
          <button styleName="modal__close" onClick={handlesClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {children}
        </div>
      </div>
    )
  }
}
