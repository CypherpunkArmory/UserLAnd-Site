import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './modal.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import Modal from '.'
import Button from '../Button'

export default class StatusModal extends Component {
  state = {
    modal: false,
  }

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    failure: PropTypes.bool,
  }

  static defaultProps = {
    title: '',
    description: '',
    failure: false,
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
  }

  render() {
    const { failure, title, description } = this.props
    const icon = failure ? faTimesCircle : faCheckCircle
    const statusTitle = failure ? 'Failure' : 'Success'
    const btnName = failure ? 'Okay' : 'Continue'

    return this.state.modal ? null : (
      <Modal
        handlesClose={this.toggleModal}
        styleName={classNames({
          modal_success: !failure,
          modal_failure: failure,
        })}
      >
        <FontAwesomeIcon icon={icon} styleName="modal__icon" />
        <h2 styleName="modal__title">{title || statusTitle}</h2>
        {description && <p styleName="modal__description">{description}</p>}
        <Button onClick={this.toggleModal} round danger={failure}>
          {btnName}
        </Button>
      </Modal>
    )
  }
}
