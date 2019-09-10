import React from 'react'

import content from '../content/badToken'

import SEO from '../components/seo'

const badTokenPage = () => (
  <div className="page">
    <SEO title="UserLAnd Bad Token Received" />
    <div className="container page__header">
      <h2>{content.pageTitle}</h2>
      <p>{content.pageSubtitle}</p>
    </div>
  </div>
)

export default badTokenPage
