import React, { Component } from 'react'

import content from '../content/faq'

import SEO from '../components/seo'
import Accordion from '../components/Accordion'

export default class FAQPage extends Component {
  render() {
    return (
      <div className="page">
        <SEO title="Holepunch FAQ" />
        <div className="container page__header">
          <h2>{content.pageTitle}</h2>
          <p>{content.pageSubtitle}</p>
        </div>
        <div className="container faq" style={{ marginBottom: '9rem' }}>
          {content.questions.map((question, i) => (
            <Accordion key={i} label={question.name}>
              {question.value}
            </Accordion>
          ))}
        </div>
      </div>
    )
  }
}
