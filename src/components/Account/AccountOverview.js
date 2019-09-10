import React, { Component } from 'react'
import { connect } from 'react-redux'

import './account.module.scss'

import { updateAccount, deleteAccount } from '../../redux/ducks/account/actions'
import { getError, accountIsLoading } from '../../redux/ducks/account/selectors'

import SettingField from './SettingField'
import DeleteAccount from './DeleteAccount'

class AccountOverview extends Component {
  state = {
    updateEmailError: '',
  }
  updatePasswordFields = [
    {
      label: 'Old Password',
      type: 'password',
      field: 'oldPassword',
      id: 'oldPassword',
      placeholder: 'Old Password',
    },
    {
      label: 'New Password',
      type: 'password',
      field: 'newPassword',
      id: 'newPassword',
      placeholder: 'New Password',
    },
  ]
  updateEmailFields = [
    {
      label: 'New Email',
      type: 'email',
      field: 'newEmail',
      id: 'newEmail',
      placeholder: 'New Email',
    },
    {
      label: 'Repeat Email',
      type: 'email',
      field: 'repeatedEmail',
      id: 'repeatedEmail',
      placeholder: 'Repeat New Email',
    },
  ]

  updatePassword = payload => {
    this.props.updateAccount({
      new_password: payload.newPassword,
      old_password: payload.oldPassword,
    })
    return true
  }

  updateEmail = ({ newEmail, repeatedEmail }) => {
    if (newEmail !== repeatedEmail) {
      this.setState({
        updateEmailError: 'New email need to match',
      })
      return false
    } else {
      this.setState({
        updateEmailError: '',
      })
      this.props.updateAccount({ email: newEmail })
      return true
    }
  }

  render() {
    const { account, deleteAccount, error, isLoading } = this.props
    const errorDetail = error && error.attributes.detail

    return (
      <div styleName="pannel">
        <h2 className="mb-4">Account Overview</h2>
        <div styleName="pannel__body">
          <SettingField
            label="Email"
            fieldText={account.email}
            onSubmit={this.updateEmail}
            isLoading={isLoading}
            submitError={this.state.updateEmailError || errorDetail}
            fields={this.updateEmailFields}
          />
          <SettingField
            label="Password"
            fieldText="●●●●●●●●●●●●●"
            onSubmit={this.updatePassword}
            isLoading={isLoading}
            submitError={errorDetail}
            fields={this.updatePasswordFields}
            />
          <hr />
          <DeleteAccount
            onSubmit={deleteAccount}
            submitError={errorDetail}
            isLoading={isLoading}
            fields={this.deleteAccountFields}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: getError(state),
    isLoading: accountIsLoading(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAccount: newDetails => {
      dispatch(updateAccount.request(newDetails))
    },
    deleteAccount: password => {
      dispatch(deleteAccount.request(password))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountOverview)
