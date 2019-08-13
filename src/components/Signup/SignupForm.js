import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Form } from 'reactstrap'

import './signup.module.scss'

import Button from '../Button'
import TextFieldGroup from '../TextFieldGroup'

class SignupForm extends Component {
  submitedTimer = null

  state = {
    email: '',
    password: '',
    errors: {},
    submited: false,
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
    }, 4400)
  }

  render() {
    const { errors } = this.state

    return (
      <Form
        onSubmit={event => {
          this.handleSubmit(event)
        }}
        className="mx-auto"
        styleName="form"
      >
        <TextFieldGroup
          label="Email"
          type="email"
          field="email"
          onChange={this.handleUpdate}
          id="signupEmail"
          placeholder="Enter Email"
          styleName="form__input"
          error={errors.email}
        />
        <TextFieldGroup
          label="Password"
          type="password"
          field="password"
          onChange={this.handleUpdate}
          id="signupPassword"
          placeholder="Password"
          styleName="form__input"
          error={errors.password}
        />

        <Button styleName="form__btn" disabled round>
          Coming Soon
        </Button>
        <span styleName="form__login">
          Already have an account? <Link to="/login">Login</Link>
        </span>
        <span className="mt-4 small" styleName="form__login">
          By signing up, you agree to our <Link to="/tos">Terms</Link> and that
          you have read our <Link to="/privacy">Privacy Policy</Link>.
        </span>
      </Form>
    )
  }
}

export default SignupForm