import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Job from './Job';
import jobstext from './jobstext';
import './index.scss';

class Jobs extends Component {
  render() {
    return (
      <div className='jobs'>
        <Helmet
          titleTemplate="%s - Jobs"
        >
          {/* Title: General title (Max 60 characters)*/}
          {/* Description Meta:  is a way of telling search engines that a specific URL represents the master copy of a page. Using the canonical tag prevents problems caused by identical or "duplicate" content appearing on multiple URLs. */}
          <meta name='description' content="Join UserLAnd and help us share Linux with the world." />
          {/* Open Graph Meta:  The Open Graph protocol enables any web page to become a rich object in a social graph. For instance, this is used on Facebook. */}
          <meta property='og:title' content='UserLAnd - Join UserLAnd' />
          <meta property='og:type' content='website' />
          <meta property='og:image' content='https://res.cloudinary.com/dmv3djaoq/image/upload/v1540821843/UserLand_Logo_RGB_Yellow_ysuigp.jpg' />
        </Helmet>
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
              {jobstext.jobs.map((job, key) => <Job key={key} {...job} />)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Jobs;
