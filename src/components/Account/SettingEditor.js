import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'reactstrap'

import './settingField.module.scss'

import Button from '../Button'
import TextFieldGroup from '../TextFieldGroup'

import { validateInput } from '../../utils/validation'

export default class SettingEditor extends Component {
  fields = this.props.fields.reduce((prev, curr) => {
    return {
      ...prev,
      [curr.field]: '',
    }
  }, {})
  submitedTimer = null

  state = {
    errors: {},
    submited: false,
    ...this.fields,
  }

  static propTypes = {
    fields: PropTypes.arrayOf(PropTypes.object),
    onSubmit: PropTypes.func,
    isLoading: PropTypes.bool,
  }

  componentWillUnmount() {
    clearInterval(this.submitedTimer)
  }

  isValid = () => {
    const { errors, isValid } = validateInput(this.state)
    this.setState({
      errors,
    })
    return isValid
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      submited: true,
    })

    this.submitedTimer = setTimeout(() => {
      this.setState({
        submited: false,
      })
    }, 3400)

    if (this.isValid()) {
      this.props.onSubmit(this.state)
    }
  }

  render() {
    const { errors, submited } = this.state
    const { fields, submitError, isLoading } = this.props

    return (
      <Form onSubmit={this.handleSubmit} styleName="field__editor">
        {fields.map(field => {
          return (
            <TextFieldGroup
              key={field.id}
              onChange={this.handleUpdate}
              error={errors[field.field]}
              {...field}
            />
          )
        })}
        {submited && submitError && (
          <span styleName="field__error">{submitError}</span>
        )}
        <Button round disabled={isLoading}>
          Submit
        </Button>
      </Form>
    )
  }
}
