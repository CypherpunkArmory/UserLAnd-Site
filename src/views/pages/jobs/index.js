import React, { Component } from 'react';
import Job from './Job';
import jobstext from './jobstext';
import './index.scss';

class Jobs extends Component {
    render() {
        return (
            <div className='jobs'>
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