import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'gatsby'
import { Form } from 'reactstrap'

import './signup.module.scss'

import Button from '../Button'
import TextFieldGroup from '../TextFieldGroup'

import { validateInput } from '../../utils/validation'
import { performRegister } from '../../redux/ducks/account/actions'
import {
  getIsLoggedIn,
  getError,
  accountIsLoading,
} from '../../redux/ducks/account/selectors'

class SignupForm extends Component {
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

    if (this.isValid()) {
      this.props.signup(this.state.email, this.state.password)
      this.setState({
        submited: true,
      })
      this.submitedTimer = setTimeout(() => {
        this.setState({
          submited: false,
        })
      }, 4400)
    }
  }

  render() {
    const { errors, submited } = this.state
    const { signupError, isLoading } = this.props

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
        {signupError && submited && (
          <span styleName="form__alert">{signupError.attributes.detail}</span>
        )}
        <Button styleName="form__btn" disabled={isLoading} round>
          Register
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

const mapStateToProps = state => {
  return {
    signupError: getError(state),
    isLoading: accountIsLoading(state),
    isLoggedIn: getIsLoggedIn(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: (email, password) => {
      dispatch(performRegister.request(email, password))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm)
