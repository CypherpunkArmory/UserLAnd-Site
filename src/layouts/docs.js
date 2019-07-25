import React, { Component } from 'react'
import { graphql } from 'gatsby'
import classnames from 'classnames'

import './docs.module.scss'

import SEO from '../components/seo'
import MarkDown from '../components/MarkDown'
import Sidebar from '../components/NavBar/Sidebar'

class Docs extends Component {
  render() {
    const { data } = this.props
    const { markdownRemark: page } = data
    
    return (
      <>
        <SEO title={`${page.frontmatter.title}`} />
        <main className="page" styleName={classnames('docs', { docs__single: !page.frontmatter.nav })}>
          {page.frontmatter.nav && <Sidebar routes={page.frontmatter.nav} />}
          <article className="markdown">
            <div className="container">
              <h2 styleName="docs__title">{page.frontmatter.title}</h2>
              <MarkDown dangerouslySetInnerHTML={{ __html: page.html }} />
            </div>
          </article>
        </main>
      </>
    )
  }
}
export default Docs

// graphql don't allow infinite recursion, deepness have to be manually
export const pageQuery = graphql`
  query DocsByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        nav {
          name
          href
          routes {
            name
            href
          }
        }
        title
      }
    }
  }
`
