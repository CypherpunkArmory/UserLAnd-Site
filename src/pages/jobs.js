import React from 'react'

import jobstext from '../content/jobs'
import '../styles/jobs.scss'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Job = ({ title, applicationDeadline, description, requirements }) => {
  return (
    <li className="job">
      <div className="row">
        <div className="job__head col-lg-4">
          <h4 className="job__title">{title}</h4>
          <h5>Application Deadline: {applicationDeadline}</h5>
        </div>
        <div className="job__body col-lg-8">
          <p>{description}</p>
          <ul className="job__requirements">
            {requirements.map((requirement, key) => (
              <li key={key}>{requirement}</li>
            ))}
          </ul>
          <p>
            To apply, email your resume and cover letter to{' '}
            <strong>
              <a
                className="link link_underline"
                href="mailto:jobs@userland.tech"
              >
                jobs@userland.tech
              </a>
            </strong>
          </p>
        </div>
      </div>
    </li>
  )
}

const jobsPage = () => (
  <Layout>
    <div className="jobs">
      <SEO title="Join UserLAnd" description="Join UserLAnd and help us share Linux with the world">
        <title>Jobs</title>
      </SEO>
      <div className="hero jobs__hero">
        <div className="jobs__hero_overlay"></div>
        <div className="container">
          <h1 className="hero__title">The Possibilities Are Endless</h1>
        </div>
      </div>
      <div className="container p-md-5 mt-5">
        <h1 className="jobs__title"> Jobs at UserLAnd</h1>
        <div className="jobs__section">
          <ul>
            {jobstext.jobs.map((job, key) => (
              <Job key={key} {...job} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default jobsPage
