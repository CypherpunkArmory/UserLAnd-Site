import React, { Component } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'

import contentType from '../content/emailSent'
import paperPlane from '../images/paper-plane-icon.svg'

import { getAccountDetails } from '../redux/ducks/account/selectors'
import { sendEmailConfirmation } from '../redux/ducks/account/actions'
import SEO from '../components/seo'
import Button from '../components/Button'

class emailSentPage extends Component {
  timer = null

  state = {
    time: 0,
    timerOn: false,
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  countDown = time => {
    if (time === 0) {
      this.setState({
        timerOn: false,
      })
      return
    }

    this.setState({
      timerOn: true,
      time: time,
    })

    this.timer = setTimeout(() => {
      this.countDown(time - 1)
    }, 1000)
  }

  handlesOnClick = () => {
    const { account, resendEmailConfirmation } = this.props

    resendEmailConfirmation(account.email)
    this.countDown(60)
  }
  render() {
    const { time, timerOn } = this.state
    const { account, location } = this.props
    const emailType = queryString.parse(location.search).type || 'confirmation'

    return (
      <div className="page">
        <SEO title="UserLAnd Confirmation Email Sent" />
        <div className="container page__header">
          <img
            src={paperPlane}
            alt="paperplane icon"
            style={{
              width: '11rem',
              marginBottom: '2rem',
            }}
          />
          <h2>{contentType[emailType].pageTitle}</h2>
          <p>{contentType[emailType].pageSubtitle}</p>

          {timerOn && (
            <p className="text-danger">You can resend again in {time}s</p>
          )}
          {!timerOn && account.email && (
            <Button onClick={this.handlesOnClick} round>
              Resend email
            </Button>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    account: getAccountDetails(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resendEmailConfirmation: email => {
      dispatch(sendEmailConfirmation.request(email))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(emailSentPage)
