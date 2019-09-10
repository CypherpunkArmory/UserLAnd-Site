import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnammes from 'classnames'

import './account.module.scss'

import { revokeTokens } from '../../redux/ducks/account/actions'

import Modal from '../Modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faRedo } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button'

class ApiKey extends Component {
  clipAreaRef = React.createRef()
  copiedTimer = null

  state = {
    copied: false,
    modal: false,
  }

  componentWillUnmount() {
    clearInterval(this.copiedTimer)
  }

  handlesClipboardCopy = e => {
    this.clipAreaRef.current.select()
    document.execCommand('copy')
    e.target.focus()

    this.setState({
      copied: true,
    })

    this.copiedTimer = setTimeout(() => {
      this.setState({
        copied: false,
      })
    }, 200)
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    })
  }

  render() {
    const { APIKey, updateAPIKey } = this.props
    const { modal, copied } = this.state

    return (
      <div styleName="pannel">
        <h2 className="mb-4">API Key</h2>
        <div styleName="api-key">
          {modal && (
            <Modal handlesClose={this.toggleModal}>
              <h3 className="mb-3" styleName="text_error">
                Revoke API key
              </h3>
              <p className="mb-3">
                By confirming you understand that this can’t be undone and any
                tunnels started with this API Key will no longer be able to
                connect. <br />
                <b>You will be disconnected soon after.</b>
              </p>
              <Button onClick={updateAPIKey} round>
                Confirm
              </Button>
            </Modal>
          )}
          <span
            styleName={classnammes('api-key__code', {
              'api-key__code_active': copied,
            })}
            onClick={this.handlesClipboardCopy}
          >
            <input ref={this.clipAreaRef} type="text" value={APIKey} readOnly />
            <div styleName="api-key__controls">
              {document.queryCommandSupported('copy') && (
                <button onClick={this.handlesClipboardCopy}>
                  <FontAwesomeIcon icon={faCopy} fixedWidth />
                </button>
              )}
            </div>
          </span>
          <button
            styleName="api-key__button api-key__button_danger"
            onClick={this.toggleModal}
          >
            <FontAwesomeIcon icon={faRedo} fixedWidth />
            Revoke All
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAPIKey: () => {
      dispatch(revokeTokens.request())
    },
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ApiKey)
