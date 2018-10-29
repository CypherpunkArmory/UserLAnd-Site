import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './index.scss';

export default class DefaultPage extends Component {
  render() {
    return (
      <div className="default-page">
        <div className="container">
          <ReactMarkdown source={this.props.markdown} />
        </div>
      </div>
    )
  }
}
