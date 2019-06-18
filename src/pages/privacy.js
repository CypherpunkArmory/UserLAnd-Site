import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import '../styles/single.scss'

import content from '../content/privacy'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default class privacyPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Privacy Policy" />
        <div className="default-page">
          <div className="container">
            <ReactMarkdown source={content} />
          </div>
        </div>
      </Layout>
    )
  }
}
