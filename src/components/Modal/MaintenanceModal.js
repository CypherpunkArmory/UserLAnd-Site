import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './modal.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'

import Modal from '.'
import Button from '../Button'

export default class MaintenanceModal extends Component {
  state = {
    modal: false,
  }

  static propTypes = {
    description: PropTypes.string,
  }

  static defaultProps = {
    description: '',
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
  }

  render() {
    const { description } = this.props

    return this.state.modal ? null : (
      <Modal handlesClose={this.toggleModal}>
        <FontAwesomeIcon icon={faCogs} style={{color: '#4fb7eb'}} styleName="modal__icon" />
        <h2 styleName="modal__title">Currently In Maintenance</h2>
        <p styleName="modal__description">{description}</p>
        <Button onClick={this.toggleModal} round>
          I'll take the risk
        </Button>
      </Modal>
    )
  }
}
