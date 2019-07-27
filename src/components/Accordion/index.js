import React, { Component } from 'react'

import './Accordion.module.scss'

import { Collapse, Card, CardBody, CardTitle } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default class Accordion extends Component {
  state = {
    collapse: false,
  }

  toggle = () => {
    this.setState(prevState => ({
      collapse: !prevState.collapse,
    }))
  }
  render() {
    const { children, label } = this.props

    return (
      <Card styleName="accordion">
        <button
          styleName="accordion__toggle"
          onClick={this.toggle}
          aria-label="Toggle"
        >
          <CardTitle styleName="accordion__label">{label}</CardTitle>
          {this.state.collapse ? (
            <FontAwesomeIcon icon={faChevronUp} fixedWidth />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} fixedWidth />
          )}
        </button>
        <Collapse isOpen={this.state.collapse}>
          <CardBody styleName="accordion__body">{children}</CardBody>
        </Collapse>
      </Card>
    )
  }
}
