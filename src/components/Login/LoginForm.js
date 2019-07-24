import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Form } from 'reactstrap'

import './login.module.scss'

import Button from '../Button'
import TextFieldGroup from '../TextFieldGroup'

class LoginForm extends Component {
  submitedTimer = null

  state = {
    email: '',
    password: '',
    errors: {},
    submited: false,
  }

  componentWillUnmount() {
    clearInterval(this.submitedTimer)
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    console.log('loging in...')
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
          id="loginEmail"
          placeholder="Enter Email"
          styleName="form__input"
          error={errors.email}
        />
        <TextFieldGroup
          label="Password"
          type="password"
          field="password"
          onChange={this.handleUpdate}
          id="loginPassword"
          placeholder="Password"
          styleName="form__input"
          error={errors.password}
        />
        <Button styleName="form__btn" disabled={true} round>
          Coming Soon
        </Button>
        <span styleName="form__signup">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </span>
      </Form>
    )
  }
}

export default LoginForm
