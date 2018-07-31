import React, { Component } from 'react';
import './error.css';

export default class Error extends Component {

  render() {
    const { error } = this.props;
    
    return (
      <div className="error-box">
        <pre>Error: {error.message 
          ? error.message 
          : error.error ? error.error : error
        }</pre>
      </div>
    );
  }
}
