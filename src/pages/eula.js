import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import '../styles/single.scss'

import content from '../content/eula'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default class eulaPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="End User License Agreement" />
        <div className="default-page">
          <div className="container">
            <ReactMarkdown source={content} />
          </div>
        </div>
      </Layout>
    )
  }
}
