import React from 'react'

import styles from '../styles/features.module.scss'

import content from '../content/features'

import SEO from '../components/seo'
import Layout from '../components/layout'

const featuresPage = () => (
  <Layout className="page">
    <SEO title="Userland Features" />
    <div className="container page__header">
      <h2 className="page__title">{content.pageTitle}</h2>
      <p>{content.pageSubtitle}</p>
    </div>
    <div className={`container ${styles['features']}`}>
      <ul>
        {content.features.map((feature, i) => {
          return (
            <li key={i}>
              <img src={feature.icon} alt={feature.title + ' icon'} />
              <div>
                <h6>{feature.title}</h6>
                <p>{feature.description}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  </Layout>
)

export default featuresPage
