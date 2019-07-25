import React from 'react'

import '../styles/404.scss'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="notfound">
      <div className="container notfound__body">
        <h1>404</h1>
        <p>WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
