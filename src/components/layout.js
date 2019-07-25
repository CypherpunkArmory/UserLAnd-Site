/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import './layout.scss'
import ogImage from '../images/og-image.jpg'

import Nav from './Nav'
import Footer from './Footer'
import SEO from './seo'

const Layout = ({ children, className = "" }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO title="Use Linux Anywhere">
          <meta property="og:image" content={ogImage} />
        </SEO>
        <Nav siteTitle={data.site.siteMetadata.title} />
        <main className={className}>{children}</main>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
