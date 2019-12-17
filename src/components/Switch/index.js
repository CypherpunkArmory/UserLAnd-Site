import React, { Component } from 'react'

import './Switch.module.scss'

export default class Switch extends Component {
  render() {
    return (
      <label styleName="switch">
        <input onClick={this.props.handlesClick} type="checkbox" />
        <span styleName="switch__slider switch__slider_round" />
      </label>
    )
  }
}
