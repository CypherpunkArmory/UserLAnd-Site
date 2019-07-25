import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import _ from 'lodash'

import '../styles/home.scss'

import hometext from '../content/home'

import GooglePlay from '../components/Button/GooglePlay'
import AppleStore from '../components/Button/AppleStore'
import SEO from '../components/seo'

class Home extends Component {
  render() {
    const { props } = this
    const { verticalScr, scrFeature, horizontalScrFeature } = _.get(
      props,
      'data'
    )

    return (
      <>
        <SEO title="Use Linux Anywhere" />
        <div className="hero">
          <div className="container">
            <div className="hero__body">
              <h1 className="hero__title">{hometext.hero.header}</h1>
              <p>{hometext.hero.body}</p>
              <div className="hero__cta">
                <GooglePlay />
                <AppleStore />
              </div>
            </div>
            <div className="hero__media">
              <Img
                fluid={verticalScr.childImageSharp.fluid}
                className="img-fluid"
                alt="Samsung Galaxy S8 UserLAnd"
                loading="eager"
              />
            </div>
          </div>
        </div>
        <div className="features">
          <div className="container">
            <div className="feature feature_vertical">
              <div className="feature__body">
                <div className="feature__head">
                  <h3 className="feature__title">
                    {hometext.features.vertical.header}
                  </h3>
                </div>
                <p>{hometext.features.vertical.body}</p>
              </div>
              <div className="feature__media">
                <img
                  className="img-fluid"
                  src={scrFeature.publicURL}
                  alt="Samsung Galaxy S8 UserLAnd"
                />
              </div>
            </div>
            <div className="feature feature_horizontal">
              <div className="feature__head">
                <h3 className="feature__title">
                  {hometext.features.horizontal.header}
                </h3>
              </div>
              <div className="feature__media">
                <img
                  className="img-fluid"
                  src={horizontalScrFeature.publicURL}
                  alt="Samsung Galaxy S8 UserLAnd"
                />
              </div>
              <div className="feature__body">
                <p>{hometext.features.horizontal.body}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export const pageQuery = graphql`
  query {
    verticalScr: file(relativePath: { eq: "vertical-screenshot.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    scrFeature: file(relativePath: { eq: "phone-feature.gif" }) {
      publicURL
    }
    horizontalScrFeature: file(
      relativePath: { eq: "phone-feature-horizontal.gif" }
    ) {
      publicURL
    }
  }
`

export default Home
