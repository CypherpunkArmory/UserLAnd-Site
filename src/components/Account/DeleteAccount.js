import React, { Component } from 'react'

import './account.module.scss'

import Modal from '../Modal'
import SettingEditor from './SettingEditor'

export default class DeleteAccount extends Component {
  fields = [
    {
      label: 'Current Password',
      type: 'password',
      field: 'password',
      id: 'currPassword',
      placeholder: 'Current Password',
    },
  ]

  state = {
    modal: false,
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    })
  }

  handlesSubmit = payload => {
    this.props.onSubmit(payload.password)
  }

  render() {
    return (
      <>
        {this.state.modal && (
          <Modal handlesClose={this.toggleModal}>
            <h3 className="mb-3" styleName="text_error">
              Delete Account
            </h3>
            <p className="mb-3">
              Deleting your account will permanently deactivate your profile
              and delete all your tunnels. This can't be undone.
            </p>
            <SettingEditor
              onSubmit={this.handlesSubmit}
              submitError={this.props.submitError}
              fields={this.fields}
              isLoading={this.props.isLoading}
            />
          </Modal>
        )}
        <button
          styleName="delete-btn"
          className="btn"
          onClick={this.toggleModal}
        >
          Delete Account...
        </button>
      </>
    )
  }
}
