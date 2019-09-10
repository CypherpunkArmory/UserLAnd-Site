import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './settingField.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'
import SettingEditor from './SettingEditor'

export default class SettingField extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    fieldText: PropTypes.string,
    fields: PropTypes.arrayOf(PropTypes.object),
    onSubmit: PropTypes.func,
    submitError: PropTypes.string,
    isLoading: PropTypes.bool,
  }

  static defaultProps = {
    label: 'email',
    fieldText: 'myemail@provider.com',
    submitError: '',
    isLoading: false,
  }

  state = {
    collapsed: false,
  }

  componentDidUpdate = prevProps => {
    if (
      this.props.isLoading !== prevProps.isLoading ||
      this.props.submitError !== prevProps.submitError
    ) {
      if (!this.props.submitError && !this.props.isLoading) {
        this.setState({
          collapsed: false,
        })
      }
    }
  }
  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    const { collapsed } = this.state
    const { label, fieldText, fields, submitError, isLoading } = this.props

    return (
      <div
        styleName={classnames('field', {
          field_open: collapsed,
        })}
      >
        {!collapsed ? (
          <div onClick={this.toggleCollapse} styleName="field__link">
            <span>{label}</span>
            <span>{fieldText}</span>
            <span>
              <FontAwesomeIcon icon={faEdit} />
            </span>
          </div>
        ) : (
          <>
            <span styleName="field__close" onClick={this.toggleCollapse}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
            <SettingEditor
              submitError={submitError}
              onSubmit={payload => {
                this.props.onSubmit(payload)
              }}
              isLoading={isLoading}
              fields={fields}
            />
          </>
        )}
      </div>
    )
  }
}
