import React, { Component } from 'react'
import './index.scss';

export default class NotFound extends Component {
  render() {
    return (
      <div className="notfound">
        <div className="container notfound__body">
          <h1>404</h1>
          <p>
            WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
          </p>
        </div>
      </div>
    )
  }
}
